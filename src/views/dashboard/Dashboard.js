import { Container, Fab, Grid, useMediaQuery } from '@mui/material';
import WeatherBlock from './components/WeatherBlock';
import { useGeolocated } from 'react-geolocated';
import { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import { getLocationCoordinates } from '../../api/weatherAPIRequest';


const StyledFab = styled(Fab)`
    position: fixed;
    right: 10px;
    bottom: 10px;
`


function Dashboard() {
    const [locations, setLocations] = useState([
        { name: 'Amsterdam', lon: 4.9041, lat: 52.3676 },
        { name: 'Berlin', lon: 13.4050, lat: 52.5200 },
        { name: 'London', lon: 0.1276, lat:51.5072 },
    ]);

    const currentLocation = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    const isMobile = !useMediaQuery('(min-width:600px)');

    const handleFabClick = useCallback(() => {
        const newLocationName = prompt("Enter another location");

        getLocationCoordinates(newLocationName).then((result) => {
            const newLocationWithCoords = { name: newLocationName, lon: result[0].lon, lat: result[0].lat};
            setLocations((prevState) => [...prevState, newLocationWithCoords ]);
        }).catch(() => {
            alert('Your input location is not found, and therefore not added.');
        })
    }, []);

    useEffect(() => {
        console.log(currentLocation);
    }, [currentLocation]);

    

    return (
        <Container>
            <Grid container spacing={2}
                  justifyContent="center">
                {currentLocation.isGeolocationEnabled &&
                    <Grid item xs={isMobile ? 10 : 4}>
                        <WeatherBlock
                            location={
                                {
                                    lon: currentLocation.coords?.longitude,
                                    lat: currentLocation.coords?.latitude,
                                    name: 'Current Location'
                                }
                            }
                        />
                    </Grid>
                }
                {locations.map(location =>
                        <Grid item xs={isMobile ? 10 : 4} key={location.name}>
                            <WeatherBlock location={location}/>
                        </Grid>
                    )}
            </Grid>
            <StyledFab onClick={handleFabClick}>
                <AddIcon />
            </StyledFab>
        </Container>
    )
}

export default Dashboard;
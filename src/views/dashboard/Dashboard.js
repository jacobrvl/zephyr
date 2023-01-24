import { Container, Fab, Grid } from '@mui/material';
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
    border: 2px solid black;
    background-color: transparent;
`;

const StyledContainer = styled(Container)`
    margin-top: 16px;
`

function Dashboard() {
    const [locations, setLocations] = useState([
        { name: 'Amsterdam', lon: 4.9041, lat: 52.3676 },
        { name: 'Berlin', lon: 13.4050, lat: 52.5200 },
        { name: 'London', lon: 0.1276, lat:51.5072 },
    ]);
    const units = 'metric';

    const currentLocation = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    const handleFabClick = useCallback(() => {
        const newLocationName = prompt("Enter a city name",'');
        if (newLocationName !== '') {
            getLocationCoordinates(newLocationName).then((result) => {
                const newLocationWithCoords = { name: newLocationName, lon: result[0].lon, lat: result[0].lat };
                setLocations((prevState) => [...prevState, newLocationWithCoords]);
            }).catch(() => {
                alert('Your input city is not found and therefore not added.');
            })
        }
    }, []);

    useEffect(() => {
        console.log(currentLocation);
    }, [currentLocation]);


    return (
        <StyledContainer>
            <Grid container spacing={2} justifyContent="center">
                {currentLocation.isGeolocationEnabled  &&
                    <Grid item xs={10} md={4}>
                        <WeatherBlock
                            location={
                                {
                                    lon: currentLocation.coords?.longitude,
                                    lat: currentLocation.coords?.latitude,
                                    name: 'Current Location'
                                }
                            }
                            units={units}
                        />
                    </Grid>
                }
                {locations.map(location =>
                        <Grid item xs={10} md={4} key={location.name}>
                            <WeatherBlock location={location} units={units} />
                        </Grid>
                    )}
            </Grid>
            <StyledFab onClick={handleFabClick}>
                <AddIcon />
            </StyledFab>
        </StyledContainer>
    )
}

export default Dashboard;
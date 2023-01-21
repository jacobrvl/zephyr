import { Container, Grid, useMediaQuery } from '@mui/material';
import WeatherBlock from './components/WeatherBlock';
import { useGeolocated } from 'react-geolocated';
import { useEffect } from 'react';


function Dashboard() {
    const locations = [
        {name: 'Amsterdam', lon: 4.9041, lat: 52.3676},
        {name: 'Berlin', lon: 13.4050, lat: 52.5200},
        {name: 'London', lon: 0.1276, lat:51.5072},
    ];
    const currentLocation = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    const isMobile = !useMediaQuery('(min-width:600px)');

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
        </Container>
    )
}

export default Dashboard;
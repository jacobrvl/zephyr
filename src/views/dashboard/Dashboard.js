import { Container, Grid } from '@mui/material';
import WeatherBlock from './components/WeatherBlock';


function Dashboard() {
    return (
        <Container>
            <Grid container>
                <Grid item>
                    <WeatherBlock location={{lon: 4.9041, lat: 52.3676, name: 'Amsterdam'}}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard;
import { Grid, Typography } from '@mui/material';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledTypography = styled(Typography)`
    font-weight: bolder;
`;

const StyledGrid = styled(Grid)`
    border: 2px solid black;
    min-height: 250px;
    border-radius: 10px;
    align-items: center;
`;

function DetailsTemp({ weatherData, units }) {

    const unitSign = units === 'metric' ? '°C' : '°F';

    return (
        <StyledGrid container spacing={2}>
            <Grid item xs={12}>
                <StyledTypography align="center">{weatherData.weather && weatherData.weather[0]?.main}</StyledTypography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2" align="center">
                    {Math.round(weatherData.main?.temp)}{unitSign}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography align="center">H: {Math.round(weatherData.main?.temp_max)}{unitSign}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography align="center">L: {Math.round(weatherData.main?.temp_min)}{unitSign}</Typography>
            </Grid>
        </StyledGrid>
    )
}
DetailsTemp.propTypes = {
    weatherData: PropTypes.object.isRequired,
    units: PropTypes.string.isRequired
};

export default DetailsTemp;
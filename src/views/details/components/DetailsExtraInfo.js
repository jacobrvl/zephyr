import { Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';
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

function DetailsExtraInfo({ weatherData }) {

    return (
        <StyledGrid container spacing={2}>
            <Grid item xs={6}>
                <StyledTypography align="center">Sunrise</StyledTypography>
                <Typography align="center">{dayjs.unix(weatherData.sys?.sunrise).format('HH:mm')}</Typography>
            </Grid>
            <Grid item xs={6}>
                <StyledTypography align="center">Sunset</StyledTypography>
                <Typography align="center">{dayjs.unix(weatherData.sys?.sunset).format('HH:mm')}</Typography>
            </Grid>
            <Grid item xs={6}>
                <StyledTypography align="center">Humidity</StyledTypography>
                <Typography align="center">{weatherData.main?.humidity}</Typography>
            </Grid>
            <Grid item xs={6}>
                <StyledTypography align="center">Visibility</StyledTypography>
                <Typography align="center">{weatherData.visibility / 1000} km</Typography>
            </Grid>
        </StyledGrid>
    )
}

export default DetailsExtraInfo;
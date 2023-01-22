import { useLocation, useNavigate } from 'react-router-dom';
import { CircularProgress, Container, Grid, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useCallback, useEffect, useState } from 'react';
import { getWeatherData } from '../../api/weatherAPIRequest';
import styled from '@emotion/styled';
import DetailsTemp from './components/DetailsTemp';
import DetailsExtraInfo from './components/DetailsExtraInfo';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';


const StyledWarningAmberIcon = styled(WarningAmberIcon)`
    height: 72px;
    width: 72px;
`;

const StyledIconButton = styled(IconButton)`
    position: absolute;
    top: 24px;
    left: 10px;
    color: black;
`;

const StyledContainerGrid = styled(Grid)`
    align-items: center;
    justify-content: center;
`;

function Details() {
    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const routerLocation = useLocation();
    const navigate = useNavigate();
    const location = routerLocation.state?.location;
    const units = routerLocation.state?.units;

    const handleBackClick = useCallback(() => {
        navigate('/');
    }, [navigate]);

    useEffect(() => {
        setIsLoading(true);

        getWeatherData(location, units).then((result) => {
            setWeatherData(result);
        }).catch(() => {
            setIsError(true);
        }).finally(() => setIsLoading(false));

    }, [location, units]);


    return (
        <Container>
            <StyledIconButton component="label" onClick={handleBackClick}>
                <ArrowBackIosNewIcon/>
            </StyledIconButton>
            <StyledContainerGrid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center">{location.name}</Typography>
                </Grid>
                <Grid item xs={11} md={6}>
                    {isLoading && <CircularProgress size={72} />}
                    {isError && <StyledWarningAmberIcon />}
                    {!isLoading && !isError && <DetailsTemp weatherData={weatherData} units={units} />}
                </Grid>
                <Grid item xs={11} md={6}>
                    {isLoading && <CircularProgress size={72} />}
                    {isError && <StyledWarningAmberIcon />}
                    {!isLoading && !isError && <DetailsExtraInfo weatherData={weatherData} /> }
                </Grid>
            </StyledContainerGrid>
        </Container>
    );
}

export default Details;

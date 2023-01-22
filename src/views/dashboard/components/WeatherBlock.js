import { useCallback, useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { CircularProgress, Grid, Typography,  } from '@mui/material';
import { getWeatherData } from '../../../api/weatherAPIRequest';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const StyledDiv = styled.div`
    background-color: aqua;
    min-height: 135px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledGridContainer = styled(Grid)`
    justify-content: end;
    align-items: center;
    align-content: space-between;
`;

const StyledWarningAmberIcon = styled(WarningAmberIcon)`
    height: 72px;
    width: 72px;
`;

function WeatherBlock({ location }) {
    const [weatherData, setWeatherData] = useState({ });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const { name } = location;
    const units = 'metric';

    const handleClickOnCity = useCallback(() => {
        navigate(`/details/${name}`, {state: location});
    }, [name, location]);


    useEffect(() => {
        setIsLoading(true);

        getWeatherData(location, units).then((result) => {
            setWeatherData(result);
        }).catch(() => {
            setIsError(true);
        }).finally(() => setIsLoading(false));

    }, [location, units]);

    return (
        <StyledDiv onClick={handleClickOnCity}>
            <StyledGridContainer container>
                <Grid item xs={12} >
                    <Typography variant="h4">{name}</Typography>
                </Grid>
                <Grid item>
                    {isLoading && <CircularProgress size={72}/>}
                    {isError && <StyledWarningAmberIcon/> }
                    {
                        !isLoading && !isError &&
                        <Typography variant="h2">
                            {Math.round(weatherData?.main?.temp)}°
                        </Typography>
                    }
                </Grid>
            </StyledGridContainer>

        </StyledDiv>
    )
}

WeatherBlock.propTypes = {
    location: PropTypes.shape({ lon: PropTypes.number, lat: PropTypes.number, name: PropTypes.string })
};

export default WeatherBlock;
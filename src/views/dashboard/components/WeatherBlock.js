import { useCallback, useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { getWeatherData } from '../../../api/weatherAPIRequest';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';


const StyledDiv = styled.div`
    background-color: aqua;
    min-height: 150px;
    border-radius: 10px;
    padding: 10px;
`;

function WeatherBlock({ location }) {
    const [weatherData, setWeatherData] = useState({ });
    const navigate = useNavigate();
    const { name } = location;
    const units = 'metric';

    const handleClickOnCity = useCallback(() => {
        navigate(`/details/${name}`, {state: location});
    }, [name, location]);


    useEffect(() => {
        getWeatherData(location, units).then((result) =>
            setWeatherData(result)
        );
    }, [location]);

    return (
        <StyledDiv onClick={handleClickOnCity}>
            <Typography variant="h3">{name}</Typography>
            <Typography>
                {weatherData?.main?.temp}
            </Typography>
        </StyledDiv>
    )
}

WeatherBlock.propTypes = {
    location: PropTypes.shape({ lon: PropTypes.number, lat: PropTypes.number, name: PropTypes.string })
};

export default WeatherBlock;
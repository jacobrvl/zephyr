import { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import weatherAPIRequest from '../../../api/weatherAPIRequest';

function WeatherBlock({ location }) {
    const [weatherData, setWeatherData] = useState({ });

    const { name } = location;
    const units = 'metric';

    useEffect(() => {
        weatherAPIRequest(location, units).then( (result) =>
            setWeatherData(result)
        );
    }, [location]);

    return (
        <div>
            <Typography variant="h3">{name}</Typography>
            <Typography>
                {weatherData?.main?.temp}
            </Typography>
        </div>
    )
}

WeatherBlock.propTypes = {
    location: PropTypes.shape({ lon: PropTypes.number, lat: PropTypes.number, name: PropTypes.string })
};

export default WeatherBlock;
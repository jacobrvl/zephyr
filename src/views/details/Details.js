import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useCallback } from 'react';

function Details() {
    const routerLocation = useLocation();
    const navigate = useNavigate();

    console.log(routerLocation.state?.location);

    const handleBackClick = useCallback(() => {
        navigate('/');
    }, [navigate]);


    return (

        <IconButton color="primary" component="label" onClick={handleBackClick}>
            <ArrowBackIosNewIcon/>
        </IconButton>

    );
}

export default Details;

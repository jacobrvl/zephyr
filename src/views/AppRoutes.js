import { Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Details from './details/Details';


function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/details/:city" element={<Details />}/>
        </Routes>
    )
}

export default AppRoutes;
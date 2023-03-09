import React from 'react';
import {NavLink} from 'react-router-dom'
import { useConfig, useAuth } from 'payload/components/utilities';


const baseClass = 'after-nav-links';

const AfterNavLinks = () => {
    const {routes: { admin: adminRoute } } = useConfig();
   
    const user = useAuth()
    const reg = user.user.region
    return(
        <div className={baseClass}>
            <NavLink
            activeClassName='active'
            to={`${adminRoute}/analytics`}
            >
            { reg == 'MX' ? 'Estadisticas' : 'Analytics' }
            </NavLink>
        </div>
    )
}
export default AfterNavLinks;
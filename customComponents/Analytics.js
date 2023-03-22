import React from 'react';
import Iframe from 'react-iframe'
import { useAuth } from 'payload/components/utilities';
import { DefaultTemplate } from 'payload/components/templates';

const baseClass = 'after-dashboard';

const Analytics = () => {

const user = useAuth()

const gTag = user.user.gtagUrl
const reg = user.user.region

console.log(user.user.gtagUrl)
	return (
    <DefaultTemplate>
		<div className={baseClass}>
      <div class="gutter--left gutter--right collection-list__wrap">
      <br/>
      <p>
		{ reg == 'MX' ? <h1 class="collection-list__sub-header">Estadisticas </h1> : <h1 class="collection-list__sub-header">Analytics </h1>}
    { reg == 'MX' ? <div class="view-description">Aqui puedes revisar las estadisticas de tu pagina  </div> : <div class="view-description">Here you can see the analytics from your page </div>}
    </p>
    <p>
      <Iframe url={user.user.gtagUrl} 
        width="100%"
        height="600px"
        id="frame"
        className=""
        display="block"
        position="relative"/>
			</p>
      </div>
		</div> 
    </DefaultTemplate>
	);
};

export default Analytics;
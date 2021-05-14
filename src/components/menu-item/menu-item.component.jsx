import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
			{/* match.url ger adressen där man är just nu. dvs att komponentetn kan användas var som helst och fortsätta på befintlig adress */}
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);

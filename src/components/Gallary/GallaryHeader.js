import React from 'react'

import { NavLink, useRouteMatch } from 'react-router-dom'

const GallaryHeader = () => {
	let { url } = useRouteMatch()
	return (
		<div className='d-flex justify-content-center shadow-lg my-5 bg-white mx-auto menu-header'>
			<NavLink
				exact
				to={url + ''}
				activeClassName='selected-menu'
				className='nav-link w-100'
			>
				Our Specialities
			</NavLink>
			<NavLink
				exact
				to={url + '/ourrestaurant'}
				activeClassName='selected-menu'
				className='nav-link w-100'
			>
				Our Restaurant
			</NavLink>
		</div>
	)
}
export default GallaryHeader

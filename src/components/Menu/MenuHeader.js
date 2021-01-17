import React from 'react'
import './Menu.css'

import { NavLink, useRouteMatch } from 'react-router-dom'

const MenuHeader = () => {
	let { url } = useRouteMatch()
	return (
		<div className=' mx-auto menu-header shadow'>
			<NavLink
				exact
				to={url + ''}
				activeClassName='selected-menu'
				className='nav-link'
			>
				Full Menu
			</NavLink>
			<NavLink
				exact
				to={url + '/breakfast'}
				activeClassName='selected-menu'
				className='nav-link'
			>
				Breakfast
			</NavLink>
			<NavLink
				exact
				to={url + '/omelettes'}
				activeClassName='selected-menu'
				className='nav-link'
			>
				Omelettes
			</NavLink>
			<NavLink
				exact
				to={url + '/sandwiches'}
				activeClassName='selected-menu'
				className='nav-link'
			>
				Sandwiches/Wraps
			</NavLink>
			<NavLink
				exact
				to={url + '/riceBowls'}
				activeClassName='selected-menu'
				className='nav-link'
			>
				Rice Bowls &amp; Wraps
			</NavLink>
			<NavLink
				exact
				to={url + '/poutine'}
				className='nav-link'
				activeClassName='selected-menu'
			>
				Poutine &amp; Chicken Wings
			</NavLink>
			<NavLink
				exact
				to={url + '/salads'}
				className='nav-link'
				activeClassName='selected-menu'
			>
				Salads &amp; Drinks
			</NavLink>
			<NavLink
				exact
				to={url + '/addons'}
				className='nav-link'
				activeClassName='selected-menu'
			>
				Add-ons
			</NavLink>
		</div>
	)
}
export default MenuHeader

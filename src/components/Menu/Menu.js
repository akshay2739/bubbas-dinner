import React from 'react'
import { useRouteMatch, Switch, Route, withRouter } from 'react-router-dom'
import MenuHeader from './MenuHeader'
import Breakfast from './types/Breakfast'
import Sandwiches from './types/Sandwiches'
import Omelettes from './types/Omelettes'
import RiceBowls from './types/RiceBowls'
import Poutine from './types/Poutine'
import Salads from './types/Salads'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './Menu.css'
import All from './types/All'

const Menu = () => {
	let { path } = useRouteMatch()

	return (
		<div className='menu-page-wrapper'>
			<div className='page-name'>
				<p>Menu</p>
			</div>
			<MenuHeader />
			<AnimatedSwitch path={path} />
		</div>
	)
}

export default Menu

const AnimatedSwitch = withRouter(({ location, path }) => (
	<TransitionGroup>
		<CSSTransition key={location.key} classNames='slide' timeout={1000}>
			<Switch location={location}>
				<Route exact path={path} component={All} />
				<Route exact path={path + '/salads'} component={Salads} />
				<Route exact path={path + '/breakfast'} component={Breakfast} />
				<Route exact path={path + '/sandwiches'} component={Sandwiches} />
				<Route exact path={path + '/omelettes'} component={Omelettes} />
				<Route exact path={path + '/riceBowls'} component={RiceBowls} />
				<Route exact path={path + '/poutine'} component={Poutine} />
			</Switch>
		</CSSTransition>
	</TransitionGroup>
))

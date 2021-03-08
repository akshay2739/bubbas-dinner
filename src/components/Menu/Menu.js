import React, { useEffect } from 'react'
import { useRouteMatch, Switch, Route, withRouter } from 'react-router-dom'
import MenuHeader from './MenuHeader'
// import Breakfast from './types/Breakfast'
// import Sandwiches from './types/Sandwiches'
// import Omelettes from './types/Omelettes'
// import RiceBowls from './types/RiceBowls'
// import Poutine from './types/Poutine'
// import Salads from './types/Salads'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './Menu.css'
import All from './types/All'
// import Addons from './types/Addons'
import FullBreakfast from './types/FullBreakfast'
import LunchAndDinnner from './types/LunchAndDinnner'
import DesertAndDrinks from './types/DesertAndDrinks'

const Menu = () => {
	let { path } = useRouteMatch()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

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
				<Route exact path={path + '/breakfast'} component={FullBreakfast} />
				<Route
					exact
					path={path + '/lunchanddinner'}
					component={LunchAndDinnner}
				/>
				<Route
					exact
					path={path + '/dessertanddrinks'}
					component={DesertAndDrinks}
				/>
				{/* <Route exact path={path + '/salads'} component={Salads} />
				<Route exact path={path + '/sandwiches'} component={Sandwiches} />
				<Route exact path={path + '/omelettes'} component={Omelettes} />
				<Route exact path={path + '/riceBowls'} component={RiceBowls} />
				<Route exact path={path + '/poutine'} component={Poutine} />
				<Route exact path={path + '/addons'} component={Addons} /> */}
			</Switch>
		</CSSTransition>
	</TransitionGroup>
))

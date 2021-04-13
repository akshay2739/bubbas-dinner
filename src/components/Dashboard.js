import React, { Component } from 'react'
import Navbar from './Home/Navbar1'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Menu from './Menu/Menu'
import Gallary from './Gallary/Gallary'
import Footer from './Footer'
import Links from './Home/Links'

export default class Dashboard extends Component {
	state = {
		show: true,
	}

	render() {
		return (
			<HashRouter>
				<Navbar />
				<Switch>
					<main>
						<Route exact path='/' component={Home} />
						<Route path='/menu' component={Menu} />
						<Route path='/Gallary' component={Gallary} />
					</main>
				</Switch>
				<Links />
				<Footer />
			</HashRouter>
		)
	}
}

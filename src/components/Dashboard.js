import React, { Component } from 'react'
import Navbar from './Home/Navbar1'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
// import About from './About/About'
import Menu from './Menu/Menu'
import Gallary from './Gallary/Gallary'
// import Contact from './Contact/Contact'
import Footer from './Footer'
// import ModalView from './Home/ModalView'npm

export default class Dashboard extends Component {
	state = {
		show: true,
	}

	render() {
		return (
			<BrowserRouter>
				{/* <ModalView
					show={this.state.show}
					onHide={() => this.setState({ show: false })}
				/> */}
				<Navbar />
				<Switch>
					<main>
						<Route exact path='/' component={Home} />
						{/* <Route path='/about' component={About} /> */}
						<Route path='/menu' component={Menu} />
						<Route path='/Gallary' component={Gallary} />
						{/* <Route path='/contact' component={Contact} /> */}
					</main>
				</Switch>
				<Footer />
			</BrowserRouter>
		)
	}
}

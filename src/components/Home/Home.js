import React, { Component } from 'react'
import Slider from './Slider'
import MenuOnHome from './MenuOnHome/MenuOnHome'

export default class Home extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<div>
				<Slider />
				<MenuOnHome />
			</div>
		)
	}
}

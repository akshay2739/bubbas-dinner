import React, { Component } from 'react'
import Breakfast from './Breakfast'
import Sandwiches from './Sandwiches'
import Omelettes from './Omelettes'
import RiceBowls from './RiceBowls'
import Poutine from './Poutine'
import Salads from './Salads'

export default class All extends Component {
	render() {
		return (
			<div>
				<Breakfast />
				<Sandwiches />
				<Omelettes />
				<RiceBowls />
				<Poutine />
				<Salads />
			</div>
		)
	}
}

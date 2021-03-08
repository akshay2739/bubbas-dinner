import React, { Component } from 'react'
// import Breakfast from './Breakfast'
// import Sandwiches from './Sandwiches'
// import Omelettes from './Omelettes'
// import RiceBowls from './RiceBowls'
// import Poutine from './Poutine'
// import Salads from './Salads'
// import Addons from './Addons'
import DesertAndDrinks from './DesertAndDrinks'
import FullBreakfast from './FullBreakfast'
import LunchAndDinnner from './LunchAndDinnner'

export default class All extends Component {
	render() {
		return (
			<div>
				<FullBreakfast />
				<LunchAndDinnner />
				<DesertAndDrinks />
				{/* <Sandwiches />
				<Omelettes />
				<RiceBowls />
				<Poutine />
				<Salads />
				<Addons /> */}
			</div>
		)
	}
}

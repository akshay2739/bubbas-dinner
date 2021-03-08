import React from 'react'
import Addons from './Addons'
import Breakfast from './Breakfast'
import Omelettes from './Omelettes'

const FullBreakfast = () => {
	return (
		<div>
			<Breakfast />
			<Omelettes />
			<Addons />
		</div>
	)
}

export default FullBreakfast

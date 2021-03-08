import React from 'react'
import Poutine from './Poutine'
import RiceBowls from './RiceBowls'
import Salads from './Salads'

const LunchAndDinnner = () => {
	return (
		<div>
			<div className='menu-name'>
				<p style={{ fontSize: 45, marginTop: 15 }}>Lunch &amp; Dinner</p>
			</div>
			<Salads />
			<RiceBowls />
			<Poutine />
		</div>
	)
}

export default LunchAndDinnner

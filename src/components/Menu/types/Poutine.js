import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class Poutine extends Component {
	Poutine = [
		{
			name: 'Classic Poutine',
			price: '8',
			desc:
				'A Canadian favourite – golden fries smothered in cheese curds and gravy',
		},
		{
			name: 'Fully Loaded Greek Fries',
			price: '12',
			desc:
				'Our golden fries topped with creamy tzatziki sauce, diced tomatoes, cucumber & onion, finished off with feta cheese & kalamata olives',
		},
		{
			name: 'Fully Loaded Butter Chicken Fries',
			price: '12',
			desc:
				'Crispy fries topped with cheese and butter chicken that will make you come back again and again',
		},
	]

	chikenWings = [
		{
			name: '8 Wings',
			price: '11',
		},
		{
			name: '16 Wings',
			price: '21',
		},
		{
			name: '24 Wings',
			price: '30',
		},
	]

	render() {
		const poutine = this.Poutine.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		const ChikenWings = this.chikenWings.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		return (
			<div>
				<div className='menu-name'>
					<p>Poutine/Loaded Fries</p>
					<h6 style={{ fontSize: 14, textAlign: 'center', padding: 5 }}>
						(Add Chicken for 2)
					</h6>
				</div>
				<div className='menu-wrapper'>{poutine}</div>

				<div className='menu-name'>
					<p>Bubba's Famous Wings</p>
					<h6 style={{ fontSize: 14, textAlign: 'center', padding: 5 }}>
						Your choice of mild, medium, hot, honey garlic, or BBQ sauce
					</h6>
					<h6 style={{ fontSize: 14, textAlign: 'center', padding: 5 }}>
						Add a side of fries 3
					</h6>
				</div>
				<div className='menu-wrapper'>{ChikenWings}</div>

				<div className='menu-name'>
					<p>OH YES WE DID!</p>
				</div>

				<div className='menu-wrapper'>
					<h6
						className='special-item'
						style={{
							fontSize: 18,
							textAlign: 'center',
							marginTop: 15,
							border: 'solid',
							width: '100%',
							padding: 5,
							margin: 5,
							transition: 'transform 30s linear',
							transformOrigin: '50% 50%',
						}}
					>
						<strong>8 Butter Chicken Wings</strong> 15
					</h6>
				</div>
			</div>
		)
	}
}

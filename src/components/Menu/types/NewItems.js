import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class NewItems extends Component {
	foodItems = [
		{
			name: "BUBBA'S Original Burger",
			price: '11.5',
			desc:
				'We start with one of our thick cut beef patties and add lettuce, onion, tomato, pickle, dressed up with Bubba sauce. Nothing fancy but oh...so good',
		},
		{
			name: 'The Clubhouse',
			price: '14',
			desc:
				'3 slices of toasted Rye bread sandwiched with chicken breast, cheddar cheese, 3 slices of Bacon, Lettuce, Tomato & mayonnaise',
		},
		{
			name: 'BBQ Chicken Burger',
			price: '14',
			desc:
				'BBQ chicken breast topped with lettuce, tomato, onion & pickles, finished with our signature BUBBA sauce',
		},
		{
			name: 'The Western Sandwich',
			price: '11',
			desc: 'Omelette, peameal, onion, green peppers in toasted rye bread',
		},
		{
			name: 'Chicken Tikka Naanwich',
			price: '14',
			desc:
				'Grilled chicken, marinated with spices, tossed with enriched gravy. Topped with our in-house creamy white sauce',
		},
		{
			name: 'Grilled Veggie Naanwich',
			price: '11',
			desc:
				'Grilled vegetables topped with thick Indian paneer patty, lettuce, tomato, sweet banana peppers and our signature BUBBA sauce. Take this veggie treat to the next level',
		},
		{
			name: 'Double BUBBA Burger Deluxe',
			price: '16',
			desc:
				'Put on your comfy pants for this guy...two thick & juicy chuck patties, bacon, lettuce, tomato, onion, pickle, hot banana peppers & cheddar cheese, dressed up with our signature BUBBA sauce',
		},
	]

	render() {
		const foodItems = this.foodItems.map((item) => {
			return <FoodItem key={item.id} item={item} />
		})

		return (
			<div>
				<div className='menu-name'>
					<p>New Items</p>
				</div>
				<h6 style={{ fontSize: 14, textAlign: 'center', padding: 5 }}>
					<strong>(served with seasoned fries)</strong>
				</h6>
				<div className='menu-wrapper'>{foodItems}</div>
			</div>
		)
	}
}

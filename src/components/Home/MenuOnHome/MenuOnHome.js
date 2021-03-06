import React, { Component } from 'react'
import MenuType from './MenuType'
import './MenuOnHome.css'

import BreakfastImage1 from '../../../assets/images/Menu/The BUBBA.jpg'
import BreakfastImage4 from '../../../assets/images/Menu/The Bubba.jpeg'
import BreakfastImage2 from '../../../assets/images/Menu/Pineapple & Mango Smoothie.jpg'
import BreakfastImage3 from '../../../assets/images/Menu/Omelets.jpg'

import LunchImage1 from '../../../assets/images/Menu/Chilli Paneer Rice Bowl.jpg'
import LunchImage2 from '../../../assets/images/Menu/Fish & Chips.jpg'
import LunchImage3 from '../../../assets/images/Menu/Chicken Wings.jpg'
import LunchImage4 from '../../../assets/images/Menu/Double BUBBA Burger Delux.jpeg'

import DessertImage1 from '../../../assets/images/Menu/Gulab Jamun.jpg'
import DessertImage2 from '../../../assets/images/Menu/Rasmalai.jpg'
import DessertImage3 from '../../../assets/images/Menu/Pancake.jpg'
import DessertImage4 from '../../../assets/images/Menu/Rice Pudding.jpeg'

const BreakfastImages = [
	BreakfastImage1,
	BreakfastImage2,
	BreakfastImage3,
	BreakfastImage4,
	DessertImage3,
]

const LunchImages = [LunchImage1, LunchImage2, LunchImage3, LunchImage4]

const DessertImages = [
	DessertImage1,
	DessertImage2,
	BreakfastImage2,
	DessertImage4,
]
export default class MenuOnHome extends Component {
	render() {
		return (
			<div className='home-menu-wrapper'>
				<MenuType
					image={BreakfastImages}
					interval='2000'
					link='/menu/breakfast'
					title='Breakfast'
				/>
				<MenuType
					image={LunchImages}
					interval='2000'
					link='/menu/lunchanddinner'
					title='Lunch &amp; Dinner'
				/>
				<MenuType
					image={DessertImages}
					interval='2000'
					link='/menu/dessertanddrinks'
					title='Dessert &amp; Drinks'
				/>
			</div>
		)
	}
}

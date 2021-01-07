import React, { Component } from 'react'
import MenuType from './MenuType'
import './MenuOnHome.css'
import AppetizerImage from '../../../assets/images/Menu on Home/appetizer-daalroti-3.jpg'
import SpecialDishesImage from '../../../assets/images/Menu on Home/chana-puri-daalroti-2.jpg'
import NonvegImage from '../../../assets/images/Menu on Home/img-03.jpg'

export default class MenuOnHome extends Component {
	render() {
		return (
			<div className='home-menu-wrapper'>
				<MenuType
					image={AppetizerImage}
					interval='1000'
					link='/menu/breakfast'
				/>
				<MenuType
					image={SpecialDishesImage}
					interval='2000'
					link='/menu/sandwiches'
				/>
				<MenuType image={NonvegImage} interval='3000' link='/menu/poutine' />
			</div>
		)
	}
}

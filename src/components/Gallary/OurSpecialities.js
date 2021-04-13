import React, { Component } from 'react'
import Card from './Card'
import './Gallary.css'
// import image from '../../assets/images/img-02.jpg'
import { Container } from 'react-bootstrap'

import BBQChickenBurger from '../../assets/images/Menu/BBQ Chicken Burger.jpeg'
import ButterChickenRiceBowl from '../../assets/images/Menu/Butter Chicken Rice Bowl.jpg'
import ButterChickenWings from '../../assets/images/Menu/Butter Chicken Wings.jpg'
import ChickenWings from '../../assets/images/Menu/Chicken Wings.jpg'
import ChilliPaneerRiceBowl from '../../assets/images/Menu/Chilli Paneer Rice Bowl.jpg'
import ClassicPoutine from '../../assets/images/Menu/Classic Poutine.jpeg'
import DoubleBubbaBurgerDelux from '../../assets/images/Menu/Double BUBBA Burger Delux.jpeg'
import FishAndChips from '../../assets/images/Menu/Fish & Chips.jpg'
import FrenchToast from '../../assets/images/Menu/French Toast.jpg'
import GreekSalad from '../../assets/images/Menu/Greek Salad.jpg'
import GrilledVeggieNaanwich from '../../assets/images/Menu/Grilled Veggie Naanwich.jpeg'
import GulabJamun from '../../assets/images/Menu/Gulab Jamun.jpg'
import LoadedGreekFries from '../../assets/images/Menu/Loaded Greek Fries.jpg'
import Omelets from '../../assets/images/Menu/Omelets.jpg'
import Pancake from '../../assets/images/Menu/Pancake.jpg'
import PineappleMangoSmoothie from '../../assets/images/Menu/Pineapple & Mango Smoothie.jpg'
import Poutine from '../../assets/images/Menu/poutine.jpg'
import Rasmalai from '../../assets/images/Menu/Rasmalai.jpg'
import RicePudding from '../../assets/images/Menu/Rice Pudding.jpeg'
import ChilliChickenRiceNaanBread from '../../assets/images/Menu/Sweet Chilli Chicken & Rice + Naan Bread (2).jpeg'
import ChilliPannerRiceBowl from '../../assets/images/Menu/Sweet Chilli Paneer Rice Bowl.jpeg'
import TheBUBBA from '../../assets/images/Menu/The BUBBA.jpg'

export default class OurSpecialities extends Component {
	FoodImages = [
		{
			name: 'Pancake',
			image: Pancake,
		},
		{
			name: 'Chilli Paneer Rice Bowl',
			image: ChilliPaneerRiceBowl,
		},
		{
			name: 'The BUBBA',
			image: TheBUBBA,
		},
		{
			name: 'Fish & Chips',
			image: FishAndChips,
		},
		{
			name: 'Butter Chicken Rice Bowl',
			image: ButterChickenRiceBowl,
		},
		{
			name: 'Greek Salad',
			image: GreekSalad,
		},
		{
			name: 'Loaded Greek Fries',
			image: LoadedGreekFries,
		},
		{
			name: 'Rasmalai',
			image: Rasmalai,
		},
		{
			name: 'Gulab Jamun',
			image: GulabJamun,
		},
		{
			name: 'Pineapple & Mango Smoothie',
			image: PineappleMangoSmoothie,
		},
		{
			name: 'Omelette',
			image: Omelets,
		},
		{
			name: 'French Toast',
			image: FrenchToast,
		},
		{
			name: 'Chicken Wings',
			image: ChickenWings,
		},
		{
			name: 'Butter Chicken Wings',
			image: ButterChickenWings,
		},
		{
			name: 'Poutine',
			image: Poutine,
		},
		{
			name: 'BBQ Chicken Burger',
			image: BBQChickenBurger,
		},
		{
			name: 'Chilli Paneer Rice Bowl',
			image: ChilliPannerRiceBowl,
		},
		{
			name: 'Sweet Chilli Chicken & Rice + Naan Bread',
			image: ChilliChickenRiceNaanBread,
		},
		{
			name: 'Rice Pudding',
			image: RicePudding,
		},
		{
			name: 'Grilled Veggie Naanwich',
			image: GrilledVeggieNaanwich,
		},
		{
			name: 'Double BUBBA Burger Delux',
			image: DoubleBubbaBurgerDelux,
		},
		{
			name: 'Classic Poutine',
			image: ClassicPoutine,
		},
	]

	render() {
		const foodImages = this.FoodImages.map((item) => {
			return <Card key={item.name} item={item} />
		})

		return (
			<Container>
				<div className='cards'>{foodImages}</div>
			</Container>
		)
	}
}

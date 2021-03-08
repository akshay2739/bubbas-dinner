import React from 'react'
import FoodItem from './FoodItem'

const desserts = [
	{
		name: 'Rice Pudding',
		price: '5',
	},
	{
		name: 'Gulab Jamun',
		price: '5',
	},
	{
		name: 'Rasmalai',
		price: '5',
	},
]

const somoothies = [
	{
		name: 'Strawberry & Banana',
		price: '5.5',
	},
	{
		name: 'Mango & Pineapple',
		price: '5.5',
	},
]

const hotBevereges = [
	{
		name: 'Coffee',
		price: '2',
	},
	{
		name: 'Tea',
		price: '1.8',
	},
]

const bottledPop = [
	{ name: 'Pepsi', price: '2.5' },
	{ name: 'Pepsi Diet', price: '2.5' },
	{ name: '7 up', price: '2.5' },
	{ name: 'Crush (Orange)', price: '2.5' },
	{ name: 'MUG Root Beer', price: '2.5' },
	{ name: 'Dr. Pepper', price: '2.5' },
	{ name: 'Brisk (Iced Tea)', price: '2.5' },
	{ name: 'Water', price: '2' },
	{ name: 'Apple Juice', price: '2.8' },
	{ name: 'Orange Juice', price: '2.8' },
]

const DesertAndDrinks = () => {
	const Desserts = desserts.map((item) => {
		return <FoodItem key={item.id} item={item} />
	})

	const Drinks = somoothies.map((item) => {
		return <FoodItem key={item.id} item={item} />
	})

	const HotBevereges = hotBevereges.map((item) => {
		return <FoodItem key={item.id} item={item} />
	})

	const BottledPop = bottledPop.map((item) => {
		return <FoodItem key={item.id} item={item} />
	})

	return (
		<div>
			<div className='menu-name'>
				<p>Dessert</p>
			</div>
			<div className='menu-wrapper'>{Desserts}</div>

			<div className='menu-name'>
				<p>Drinks</p>
			</div>

			<div className='menu-name'>
				<h6 style={{ fontSize: 18, textAlign: 'center', marginTop: 20 }}>
					Smoothies
				</h6>
			</div>
			<div className='menu-wrapper'>{Drinks}</div>

			<div className='menu-name'>
				<h6 style={{ fontSize: 18, textAlign: 'center', marginTop: 50 }}>
					Hot Beverages
				</h6>
			</div>
			<div className='menu-wrapper'>{HotBevereges}</div>

			{/* <div className='menu-name'> */}
			<h6 style={{ fontSize: 18, textAlign: 'center', marginTop: 50 }}>
				Bottled Pop
			</h6>
			{/* </div> */}
			<div className='menu-wrapper'>{BottledPop}</div>
		</div>
	)
}

export default DesertAndDrinks

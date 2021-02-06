import React, { Component } from 'react'
import Card from './Card'
import './Gallary.css'
import image from '../../assets/images/img-02.jpg'
import { Container } from 'react-bootstrap'

class OurRestaurant extends Component {
	FoodImages = [
		{
			name: 'Hello world',
			image: image,
		},
		{
			name: 'Hello world',
			image: image,
		},
		{
			name: 'Hello world',
			image: image,
		},
		{
			name: 'Hello world',
			image: image,
		},
		{
			name: 'Hello world',
			image: image,
		},
		{
			name: 'Hello world',
			image: image,
		},
		{
			name: 'Hello world',
			image: image,
		},
		{
			name: 'Hello world',
			image: image,
		},
		{
			name: 'Hello world',
			image: image,
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

export default OurRestaurant

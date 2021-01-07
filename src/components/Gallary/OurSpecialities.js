import React, { Component } from 'react'
import Card from './Card'
import './Gallary.css'
import image from '../../assets/images/img-02.jpg'

export default class OurSpecialities extends Component {
	FoodImages = [
		{
			name: 'Speciality 1',

			image: image,
		},
		{
			name: 'Speciality 2',

			image: image,
		},
		{
			name: 'Speciality 3',
			image: image,
		},
		{
			name: 'Speciality 4',
			image: image,
		},
		{
			name: 'Speciality 5',
			image: image,
		},
		{
			name: 'Speciality 6',
			image: image,
		},
		{
			name: 'Speciality 7',
			image: image,
		},
		{
			name: 'Speciality 8',
			image: image,
		},
		{
			name: 'Speciality 9',
			image: image,
		},
		{
			name: 'Speciality 10',
			image: image,
		},
		{
			name: 'Speciality 11',
			image: image,
		},
	]

	render() {
		const foodImages = this.FoodImages.map((item) => {
			return <Card key={item.name} item={item} />
		})

		return (
			<div>
				<div className='cards'>{foodImages}</div>
			</div>
		)
	}
}

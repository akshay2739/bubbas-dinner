import React, { Component } from 'react'
import './MenuOnHome.css'
import { NavLink } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

export default class MenuType extends Component {
	image = this.props.image
	render() {
		return (
			<div className='menu-type-wrapper shadow-lg'>
				<NavLink to={this.props.link}>
					<Carousel
						interval={this.props.interval}
						controls={false}
						indicators={false}
					>
						{this.image.map((item) => (
							<Carousel.Item>
								<img className='d-block w-100' src={item} alt='First slide' />
								<div className='carouser-text'>
									<p>{this.props.title}</p>
									<span style={{ marginLeft: 5, color: 'red', fontSize: 35 }}>
										<i class='fas fa-chevron-circle-down'></i>
									</span>
								</div>
							</Carousel.Item>
						))}
					</Carousel>
				</NavLink>
			</div>
		)
	}
}

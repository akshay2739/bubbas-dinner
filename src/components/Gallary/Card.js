import React, { Component } from 'react'
import './Gallary.css'

class Card extends Component {
	render() {
		return (
			<div class='card'>
				<div className='card_body'>
					<img class='card_image' src={this.props.item.image} alt='' />
					<div class='card_content'>
						<h2 class='card_title'>{this.props.item.name}</h2>
					</div>
				</div>
			</div>
		)
	}
}

export default Card

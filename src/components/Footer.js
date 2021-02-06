import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
	render() {
		return (
			<div className='footer  mt-5'>
				<div className='map shadow my-4'>
					<iframe
						title='maps'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.0412251843486!2d-81.14597058457325!3d42.99846647914915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882e92bd08a4cac1%3A0xc5dbb31f19328768!2s480%20Sovereign%20Rd%2C%20London%2C%20ON%20N6M%201A4%2C%20Canada!5e0!3m2!1sen!2sin!4v1610039939316!5m2!1sen!2sin'
					></iframe>
				</div>
				<div className='services'>
					<h1>Phone</h1>
					<p>519 455 9900</p>
					<h1>E-mail</h1>
					<p>dineatbd@gmail.com</p>
				</div>
				<div className='social'>
					<h1>Follow us</h1>
					<div className='links'>
						<a href='https://www.facebook.com' target='blank'>
							<i className='fa fa-facebook-square'></i>
						</a>
						<a href='https://www.instagram.com/bubbas.diner/' target='blank'>
							<i className='fa fa-instagram'></i>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer

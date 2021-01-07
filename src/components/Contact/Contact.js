import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
	render() {
		return (
			<div className='contact-page-wrapper'>
				<div className='page-name'>
					<p>Contact</p>
				</div>
				<form
					action=''
					className=' mx-auto shadow-lg p-3 mb-5 bg-white rounded mt-3 akshay'
				>
					<div className='line mt-3'>
						<div className='col'>
							<input
								type='text'
								class='form-control'
								placeholder='First name'
								required
							/>
						</div>
						<div className='col'>
							<input
								type='text'
								class='form-control'
								placeholder='Phone'
								required
							/>
						</div>
					</div>
					<div className='line mt-3'>
						<div className='col'>
							<input
								type='email'
								class='form-control'
								placeholder='Email ID'
								required
							/>
						</div>
						<div className='col'>
							<input
								type='text'
								class='form-control'
								placeholder='Subject'
								required
							/>
						</div>
					</div>
					<div className='line mt-3'>
						<div className='col'>
							<textarea
								class='form-control'
								id='exampleFormControlTextarea1'
								placeholder='Message'
								rows='3'
								required
							></textarea>
						</div>
					</div>
					<div className='line mt-3'>
						<div className='col'>
							<button type='submit' class='btn btn-danger'>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

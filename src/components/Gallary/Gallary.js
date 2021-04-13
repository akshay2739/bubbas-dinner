import React, { useEffect } from 'react'
import './Gallary.css'
import '../Menu/Menu.css'
import OurSpecialities from './OurSpecialities'

const Gallary = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className='gallary-page-wrapper'>
			<div className='page-name'>
				<p>Gallery</p>
			</div>
			<OurSpecialities />
		</div>
	)
}

export default Gallary

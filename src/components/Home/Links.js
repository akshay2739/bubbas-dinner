import React from 'react'
import './links.css'
import uber from '../../assets/images/logo/uber-eats.png'
import skipthedishes from '../../assets/images/logo/SkipTheDishe.png'
import doordash from '../../assets/images/logo/doordash.png'

const Links = () => {
	return (
		<div className='uber-links'>
			<a
				target='_blank'
				rel='noreferrer'
				href='https://www.ubereats.com/ca/london-ont/food-delivery/bubbas-diner/lVjF0JWfQHu8atlUVyqXXA'
			>
				<img src={uber} alt='' />
			</a>
			<a
				target='_blank'
				rel='noreferrer'
				href='https://www.skipthedishes.com/bubbas-diner?utm_source=google&utm_medium=organic&utm_campaign=gpa'
			>
				<img src={skipthedishes} alt='' />
			</a>
			<a
				target='_blank'
				rel='noreferrer'
				href='https://www.doordash.com/en-CA/store/bubbas-diner-london--london-1607749'
			>
				<img src={doordash} alt='' />
			</a>
		</div>
	)
}

export default Links

import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/images/logo.png'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false,
		}
	}

	handleMenuClick() {
		this.setState({ menuOpen: !this.state.menuOpen })
	}

	handleLinkClick() {
		this.setState({ menuOpen: false })
	}

	render() {
		const styles = {
			container: {
				position: 'fixed',
				top: 0,
				height: '80px',
				zIndex: '99',
				display: 'flex',
				alignItems: 'center',
				width: '100%',
				color: 'white',
				fontFamily: 'Lobster',
			},
			logo: {
				margin: '0 auto',
			},
		}
		const menu = [
			<NavLink to='/' className='nav-link'>
				Home
			</NavLink>,
			<NavLink to='/menu' className='nav-link'>
				Menu
			</NavLink>,
			<NavLink to='/gallary' className='nav-link'>
				Gallery
			</NavLink>,
		]
		const menuItems = menu.map((val, index) => {
			return (
				<MenuItem
					key={index}
					delay={`${index * 0.1}s`}
					onClick={() => {
						this.handleLinkClick()
					}}
				>
					{val}
				</MenuItem>
			)
		})

		return (
			<div>
				<div style={styles.container} className='header'>
					<div style={styles.logo} className='logo-name'>
						<NavLink to='/' className='nav-link'>
							<img
								style={{ width: 125, margin: 5, marginTop: 15 }}
								src={logo}
								alt="Bubba's Diner"
							/>
						</NavLink>
					</div>
					<MenuButton
						open={this.state.menuOpen}
						onClick={() => this.handleMenuClick()}
						color='#b00e13'
					/>
				</div>
				<Menu open={this.state.menuOpen}>{menuItems}</Menu>
			</div>
		)
	}
}

/* MenuItem.jsx*/
class MenuItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hover: false,
		}
	}

	handleHover() {
		this.setState({ hover: !this.state.hover })
	}

	render() {
		const styles = {
			container: {
				opacity: 0,
				animation: '1s appear forwards',
				animationDelay: this.props.delay,
			},
			menuItem: {
				fontFamily: `'Open Sans', sans-serif`,
				fontSize: '1.2rem',
				fontWeight: 'bolder',
				padding: '1rem 0',
				margin: '0 5%',
				cursor: 'pointer',
				color: this.state.hover ? 'white' : '#fafafa',
				transition: 'color 0.2s ease-in-out',
				animation: '0.5s slideIn forwards',
				animationDelay: this.props.delay,
			},
			line: {
				width: '90%',
				height: '2.5px',
				background: 'white',
				margin: '0 auto',
				animation: '0.5s shrink forwards',
				animationDelay: this.props.delay,
			},
		}
		return (
			<div style={styles.container}>
				<div
					style={styles.menuItem}
					onMouseEnter={() => {
						this.handleHover()
					}}
					onMouseLeave={() => {
						this.handleHover()
					}}
					onClick={this.props.onClick}
				>
					{this.props.children}
				</div>
				<div style={styles.line} />
			</div>
		)
	}
}

/* Menu.jsx */
class Menu extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: this.props.open ? this.props.open : false,
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.open !== this.state.open) {
			this.setState({ open: nextProps.open })
		}
	}

	render() {
		const styles = {
			container: {
				position: 'fixed',
				top: 35,
				left: 0,
				height: this.state.open ? '100%' : 0,
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				background: 'black',
				opacity: 0.95,
				color: '#fafafa',
				transition: 'height 0.3s ease',
				zIndex: 2,
			},
			menuList: {
				paddingTop: '3rem',
			},
		}
		return (
			<div style={styles.container}>
				{this.state.open ? (
					<div style={styles.menuList}>{this.props.children}</div>
				) : null}
			</div>
		)
	}
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: this.props.open ? this.props.open : false,
			color: this.props.color ? this.props.color : '#43e0b6',
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.open !== this.state.open) {
			this.setState({ open: nextProps.open })
		}
	}

	handleClick() {
		this.setState({ open: !this.state.open })
	}

	render() {
		const styles = {
			container: {
				height: '32px',
				width: '32px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
				padding: '4px',
			},
			line: {
				height: '2px',
				width: '20px',
				background: this.state.color,
				transition: 'all 0.2s ease',
			},
			lineTop: {
				transform: this.state.open ? 'rotate(45deg)' : 'none',
				transformOrigin: 'top left',
				marginBottom: '5px',
			},
			lineMiddle: {
				opacity: this.state.open ? 0 : 1,
				transform: this.state.open ? 'translateX(-16px)' : 'none',
			},
			lineBottom: {
				transform: this.state.open ? 'translateX(-1px) rotate(-45deg)' : 'none',
				transformOrigin: 'top left',
				marginTop: '5px',
			},
		}
		return (
			<div
				style={styles.container}
				onClick={
					this.props.onClick
						? this.props.onClick
						: () => {
								this.handleClick()
						  }
				}
			>
				<div style={{ ...styles.line, ...styles.lineTop }} />
				<div style={{ ...styles.line, ...styles.lineMiddle }} />
				<div style={{ ...styles.line, ...styles.lineBottom }} />
			</div>
		)
	}
}

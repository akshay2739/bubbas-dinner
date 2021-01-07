import React, { Component } from 'react'
import './MenuOnHome.css'
import { NavLink } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

export default class MenuType extends Component {
    image = this.props.image
    render() {
        return (
            <div className="menu-type-wrapper" > 
                <NavLink to={this.props.link} >
                    <Carousel  interval={this.props.interval} controls={false} indicators={false}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={this.image}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={this.image}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={this.image}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </NavLink>
            </div>
        )
    }
}

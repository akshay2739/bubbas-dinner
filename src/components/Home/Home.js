import React, { Component } from 'react'
import Slider from './Slider'
import MenuOnHome from './MenuOnHome/MenuOnHome'

export default class Home extends Component {
    
    state = {
        
    }

    render() {
        return (
            <div>
                <Slider />
                <MenuOnHome />
            </div>
            
        )
    }
}

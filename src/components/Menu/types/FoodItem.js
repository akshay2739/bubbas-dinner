import React, { Component } from 'react'
import './FoodItem.css'

export default class FoodItem extends Component {
    render() {
        const item = this.props.item
        return (
            <div className="food-card">
                <div className="food-card-header">
                    <h1 className="item-name">{item.name}</h1>
                    <h1 className="item-price">{item.price}</h1>
                </div>
                <div className="description">
                    {item.desc}
                </div>
            </div>
        )
    }
}

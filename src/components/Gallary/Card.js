import React, { Component } from 'react';
import './Gallary.css'

class Card extends Component {
    render() {
        return (
            <div class="cards_item">
                <div class="card">
                    <div class="card_image"><img src={this.props.item.image} alt="" /></div>
                    <div class="card_content">
                        <h2 class="card_title">{this.props.item.name}</h2>
                        {/* <p class="card_text">{this.props.item.desc}</p> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;

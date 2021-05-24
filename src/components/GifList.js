import React, { Component } from 'react'

export default class GifList extends Component {

    renderResults = () => {

    }

    render() {
        return (
            <ul>
               {this.props.imgSrcs.map(el => <li><img src={el}></img></li>)}
            </ul>
        )
    }
}
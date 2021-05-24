import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor() {
        super()

        this.state = {
            value: ""
        }
    }

    handleField = (e) => {
        this.setState({
            value: e.target.value
        })
        console.log(this.state.value)
    }

    submitResults = (e) => {
        e.preventDefault()
        this.props.search(this.state.value)
    }

    render() {
        return (
            <form>
                <label>Enter a search</label>
                <input 
                    type = "text"
                    name = "searchField"
                    onChange = {this.handleField}
                    value = {this.state.value}/>
                <button onClick = {this.submitResults}>Find Gifs</button>
            </form>
        )
    }
}
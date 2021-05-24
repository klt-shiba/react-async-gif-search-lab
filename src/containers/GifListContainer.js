import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor() {
        super()

        this.state = {
            src: []
        }
    }
    
    fetchResults = (e) => {
        const searchResult = e
        const fetchedURL = `https://api.giphy.com/v1/gifs/search?q=${searchResult}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(fetchedURL)
        .then(resp => resp.json())
        .then(data => this.intepretResult((data.data)))
    }

    intepretResult = (data) => {

        const value = data.slice(0, 3)
        const trimmedSrcs = []
        
        for (let gif of value) {
            console.log(gif)
            const imgSrcs = gif.images.original.url
            trimmedSrcs.push(imgSrcs)
        }
        this.setState({
            src: trimmedSrcs
        })
        console.log(this.state.src)
    }

    render() {
        return (
            <div>
                <GifList imgSrcs = {this.state.src}></GifList>
                <GifSearch search={this.fetchResults}></GifSearch>
            </div>
        )
    }
}
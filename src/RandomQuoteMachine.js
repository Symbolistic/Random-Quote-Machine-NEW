import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare, faTumblrSquare } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'


class RandomQuoteMachine extends React.Component {
    constructor () {
        super()
        this.state = {
            quote: '',
            author: '',
            quotesAPI: [],
        }
        this.randomizer = this.randomizer.bind(this);
    }


    // Basically gets a random quote object from the loaded API Array and returns the quote and author properties
    randomizer () {
        const randomQuote = this.state.quotesAPI[Math.floor(Math.random() * 102)]

        this.setState ({
            quote: randomQuote.quote,
            author: randomQuote.author,
        })   
    }

    // Fetch the API then map it as objects with 2 prop's, quote and author.
    componentDidMount () {
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
            .then(response => response.json())
            .then(response => {
                this.setState ({ quotesAPI: response.quotes.map (element => { return { quote: element.quote, author: element.author } }) })
            })
            .then(() => this.randomizer()) // Sets a random quote/author in the component props
    }


    render () {
        const bgOne = require('./backgrounds/1.jpg');
        const bgTwo = require('./backgrounds/2.jpg');
        const bgThree = require('./backgrounds/3.jpg');
        const bgFour = require('./backgrounds/4.jpg');
        const bgFive = require('./backgrounds/5.jpg');
        const bgSix = require('./backgrounds/6.jpg');
        const bgSeven = require('./backgrounds/7.jpg');
        const bgEight = require('./backgrounds/8.jpg');
        const bgNine = require('./backgrounds/9.jpg');

        // Conditional Rendering. If the Array is empty, we didn't fetch the API and load it yet, so we wait, once its true we go.
        if(this.state.quotesAPI.length > 0){

            return (
                <div className="tint">
                        <div id="quote-box">
                        <img alt="pre-load-abstract-img" src={bgOne} />
                        <img alt="pre-load-abstract-img" src={bgTwo} />
                        <img alt="pre-load-abstract-img" src={bgThree} />
                        <img alt="pre-load-abstract-img" src={bgFour} />
                        <img alt="pre-load-abstract-img" src={bgFive} />
                        <img alt="pre-load-abstract-img" src={bgSix} />
                        <img alt="pre-load-abstract-img" src={bgSeven} />
                        <img alt="pre-load-abstract-img" src={bgEight} />
                        <img alt="pre-load-abstract-img" src={bgNine} />


                        <h3 id="text"><FontAwesomeIcon icon={faQuoteLeft}/> {this.state.quote}</h3>
                        <p id="author">- {this.state.author}</p>
                        <a href="https://twitter.com/intent/tweet" id="tweet-quote"><FontAwesomeIcon icon={faTwitterSquare}/></a>
                        <a href="https://tumblr.com/" id="tumblr"><FontAwesomeIcon icon={faTumblrSquare}/></a>
                        {/* Set a new random quote when this button is clicked */}
                        <button className="btn" id="new-quote" onClick={this.randomizer}>New Quote</button>
                    </div>
                </div>

            )
        } else {
            return (
                    <div id="loading"></div>  // A basic lame loading screen, don't judge me okay?...
            )
        }  
    }
}

export default RandomQuoteMachine
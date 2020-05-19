import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function Header () {
    return (
        <header>
            <h1>Random Quote Machine <FontAwesomeIcon id="quoteRight" icon={faQuoteRight} /></h1>
        </header>
    )
}

export default Header
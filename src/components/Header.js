import React from 'react'

const Header = props => {
    return (
        <div className="navbar bg-dark text-white justify-content-center">
            <h1>{props.title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'My App'
}

export default Header

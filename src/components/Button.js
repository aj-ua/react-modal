import React, { Component } from 'react'

class Button extends Component {
    render() {
        const { className, text, onClick } = this.props
        return <button
            className={`btn ${className}`}
            type="button"
            onClick={onClick}
        > {text}</button >
    }
}

Button.defaultProps = {
    className: 'btn-primary',
    text: 'Button',
    isModal: false,
    modal: null
}

export default Button

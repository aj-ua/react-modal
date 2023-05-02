import React, { Component } from 'react'
import Button from './Button'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.toggleModal = this.toggleModal.bind(this)
        this.state = {
            toggle: false
        }
    }

    toggleModal = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        const { id, text, closeButton, actions, modalButton } = this.props

        return (
            <>
                <Button className={modalButton.className} text='Show Modal' onClick={this.toggleModal} />

                {this.state.toggle &&
                    <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
                        <div className="modal-overlay" onClick={this.toggleModal}></div>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5">Modal {id}</h1>
                                    {closeButton ? <button type="button" className="btn-close" onClick={this.toggleModal}></button> : null}
                                </div>
                                <div className="modal-body">{text}</div>
                                <div className="modal-footer">
                                    {actions.map(action =>
                                        <Button key={action.id} className={action.className} text={action.text} onClick={action.onClick} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div >
                }


            </>
        )
    }
}

Modal.defaultProps = {
    title: 'Modal',
    text: '...',
    closeButton: false
}

export default Modal

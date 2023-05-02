import React, { Component } from 'react'
import Modal from './Modal'

class Modals extends Component {
    constructor() {
        super()
        this.state = {
            modals: [
                {
                    id: 1,
                    text: "Do you really want to remove this?",
                    closeButton: true,
                    modalButton: { className: "btn-primary btn-lg", text: "Open first modal" },
                    actions: [
                        { id: 1, className: "btn-success", text: "Yes", onClick: (e) => console.log(e.target) },
                        { id: 2, className: "btn-danger", text: "No", onClick: (e) => alert(e.target) },
                    ]
                },
                {
                    id: 2,
                    text: "Lorem ipsum dolor sit amet?",
                    closeButton: true,
                    modalButton: { className: "btn-secondary btn-lg", text: "Open second modal" },
                    actions: [
                        { id: 1, className: "btn-success", text: "Agree", onClick: () => console.log(this.props.text) },
                        { id: 2, className: "btn-danger", text: "Decline", onClick: (e) => alert(e.target) },
                    ]
                }
            ]
        }
    }

    render() {
        const { modals } = this.state

        return (
            <div className="my-5 d-flex gap-3 justify-content-center">
                {modals.map(modal => (
                    <Modal
                        key={modal.id}
                        id={modal.id}
                        text={modal.text}
                        closeButton={modal.closeButton}
                        actions={modal.actions}
                        modalButton={modal.modalButton}
                    />
                ))}
            </div>
        )
    }
}

export default Modals

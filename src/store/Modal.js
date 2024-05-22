import React from 'react'
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container'
import classes from './Modal.module.css'

const Backdrop = (props) => {
   return (
        <Container className={classes.backdrop} onClick={props.onClick}></Container>
    )
}
const ModalOverlay = (props) => {
   return (
        <div className={classes.modal}>
            <Container>{props.children}</Container>
        </div>
   )
}

const Modal = (props) => {
    const portalElement = document.getElementById('modal-root')
  return (
    <>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal
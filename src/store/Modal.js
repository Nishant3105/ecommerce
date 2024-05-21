import React from 'react'
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container'
// import Card from 'react-bootstrap/Card'

const Backdrop = (props) => {
   return (
        <Container style={{width:'100%',height:'100vh'}} onClick={props.onClick}></Container>
    )
}
const ModalOverlay = (props) => {
   return (
        <Container>
            <Container>{props.children}</Container>
        </Container>
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
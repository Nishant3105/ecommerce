import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import CartContext from '../../context/CartContext';

const Headers = (props) => {
    const cartCtx=useContext(CartContext)
    const totalCartItem=cartCtx.products.length
    return (
        <>
            <Navbar bg="dark" fixed="top" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link >Store</Nav.Link>
                        <Nav.Link >About</Nav.Link>
                    </Nav>
                    <Container>
                    <Button onClick={props.onClick}>cart
                    <Container varient="light">{totalCartItem}</Container>
                    </Button>
                    </Container>
                </Container>
            </Navbar>
            <header style={{backgroundColor:'palegreen',marginTop:'75px',height:"20vh"}}>
                <h1 style={{color:'white',textAlign:'center',width:'100%',paddingTop:'30px'}}>Header</h1>
            </header>
        </>
    )
}

export default Headers
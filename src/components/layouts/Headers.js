import React,{useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import CartContext from '../../context/CartContext';
import AuthContext from '../../store/AuthContext';

const Headers = (props) => {
    const cartCtx=useContext(CartContext)

    const authCtx=useContext(AuthContext)

    const totalCartItem=cartCtx.products.length

    const history=useHistory()

    const logInHandler=(e)=>{
        e.preventDefault()
        history.replace('/auth')
    }
    const logOutHandler=(e)=>{
        e.preventDefault()
        authCtx.logout()
    }

    return (
        <>  
            <Navbar bg="dark" fixed="top" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/productlist">Product</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contactus">ContactUs</Nav.Link>
                    </Nav>
                    <Container>
                    <Button onClick={props.onClick}>cart
                    <Container varient="light">{totalCartItem}</Container>
                    </Button>
                    </Container>
                    <Container>
                    {!authCtx.isLoggedIn && <Button onClick={logInHandler}>login
                    </Button>}
                    {authCtx.isLoggedIn && <Button onClick={logOutHandler}>logout
                    </Button>}
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
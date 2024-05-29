import React, {useContext} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CartContext from '../../context/CartContext'
import { useHistory } from 'react-router-dom'


const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
];

const ProductList = () => {
    const cartCtx=useContext(CartContext)
    const history=useHistory()
    
    const showProductDetails = (id)=>{
        history.push(`/productlist/${id}`)
    }
    const products = productsArr.map((product, index) => {
        return (
            <Col sm={4} key={index}>
                <Card className="shadow-ig" onClick={()=>showProductDetails(index)}>
                    <Card style={{ width: 'fit-content' }}>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Body>
                            <Card.Img variant="top" src={product.imageUrl} />
                            <Card.Text>
                                ${product.price}
                            <Button variant="primary" onClick={()=>cartCtx.addToCart({...product,id:index})}>Add To Cart</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Card>
            </Col>

        )
    })
    return (
        <>
            <Container className='mt-3'>
                <Row>
                        {products}
                </Row>
            </Container>

        </>
    )
}

export default ProductList
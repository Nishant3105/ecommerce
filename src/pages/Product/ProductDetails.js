import React from 'react'
import {useParams} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const ProductDetails = () => {
    const {product_id}=useParams()
    const productDetails=[
        {
            id: 0,
            images: ["\\pic1.png","\\pic2.jpg"],
            title: 'Colors',
            reviews: ["Divining lamplight is sad before land lenore. I and for respiterespite thy, when a this sat the sorrow, the the.",
            "Meg szenvednem ha egymást szegezd érte, kincs lásd legutolsó csizmák.",
            "Quel ô pontife cette un faite ronge termine la et. Ou contemplons."
            ]
        },
        {
            id: 1,
            images: ["\\pic3.jpg"],
            title: 'Black and white Colors',
            reviews: ["Quel ô pontife cette un faite ","I and for respiterespite thy, when a this sat"]
        },
        {
            id: 2,
            images: [],
            title: 'Yellow and Black Colors',
            reviews: ["Meg szenvednem ha egymást szegezd érte, kincs ","cette un faite ronge termine la et. Ou "]
        },
        {
            id: 3,
            images: ["\\pic4.jpg"],
            title: 'Blue Color',
            reviews: ["ha egymást szegezd érte, kincs lásd legutolsó csizmák"]
        },
    ]
    //or fetch can be used to get these details 

    const requiedProduct=productDetails.find((product)=>
      product.id.toString()===product_id
    )
    console.log(requiedProduct)
    const ProductDetailsDisplay = requiedProduct.images.map((image, index) => {
        return (
            <Col sm={4} key={index}>
                <Card className="shadow-ig">
                    <Card style={{ width: 'fit-content' }}>
                        <Card.Title>{requiedProduct.title}</Card.Title>
                            <Card.Img variant="top" src={image} />
                    </Card>
                </Card>
            </Col>

        )
    })
    return (
        <>
            <Container className='mt-3'>
                <Row>
                        {ProductDetailsDisplay}
                </Row>
            </Container>
            <ul id="product-reviews">
                <h3>Customer's Reviews</h3>
              {requiedProduct.reviews.map((review,index)=>{
                return (
                    <li key={index}>{review}</li>
                )
              })}
            </ul>

        </>
    )
}

export default ProductDetails
import React, { useRef,useCallback } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const ContactUs = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const phonenumberRef = useRef();

    const submitHandler = useCallback(async (e) => {
        try{
            e.preventDefault()
            const enteredName = nameRef.current.value;
            const enteredEmail = emailRef.current.value;
            const enteredPhoneNumber = phonenumberRef.current.value;
            
            const formData = {
                name: enteredName,
                openingText: enteredEmail,
                releaseDate: enteredPhoneNumber
            };
            
            const response=await fetch('https://react-http-109f0-default-rtdb.firebaseio.com/ecommerce-user-info.json',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/josn'
                },
                body: JSON.stringify(formData)
            })
            
            if(response.ok){
                const data=await response.json()
                console.log(data)
                nameRef.current.value = '';
                emailRef.current.value = '';
                phonenumberRef.current.value = '';
            }  
        }
        catch(error){
            console.log(error)
        }
        },[])
    
    return (
        <Container>
            <Form>
            <Form.Text className="text-muted">
                We'll never share your information with anyone else.
            </Form.Text>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control id="name" type="text" ref={nameRef} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='email'>Email:</Form.Label>
                <Form.Control id="email" type="email" ref={emailRef} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="phonenumber">Phone Number:</Form.Label>
                <Form.Control id="phonenumber" type="number" ref={phonenumberRef} required/>
            </Form.Group>

                <Button onClick={submitHandler}>Submit</Button>
            </Form>
        </Container>
    )
}

export default ContactUs
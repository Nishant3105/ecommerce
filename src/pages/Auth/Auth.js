import { useState, useRef, useContext } from 'react';

// import classes from './AuthForm.module.css';
import AuthContext from '../../store/AuthContext';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Auth = () => {
    const [isLoading, setIsLoading] = useState(false)

    const emailReference = useRef()
    const passwordReference = useRef()

    const history = useHistory()

    const AuthCtx = useContext(AuthContext)

    const authHandler = async (e) => {
        e.preventDefault()
        setIsLoading((prevState) => !prevState);
        try {
            const enteredEmail = emailReference.current.value
            const enteredPassword = passwordReference.current.value
            const userCreds = {
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }

            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDk6BaMAPvSu4Boffm_G3IV3dU7lcV03HA',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userCreds)
                })

                setIsLoading((prevState) => !prevState);
            if (!response.ok) {
                throw new Error('Authentication failed')
            }
            else if(response.ok) {
                const data = await response.json()
                console.log(data)
                history.push('/productlist')
                AuthCtx.login(data.idToken, data.expiresIn)
            }

        } catch (error) {
            console.log(error.message)
            alert(error.message)
        }
    }

    return (

        // <section className={classes.auth}>
        <section >
            <Form >
            <Form.Text> Login </Form.Text>
                <Form.Group>
                {/* <div className={classes.control}> */}
                    <Form.Label htmlFor='email'>Your Email</Form.Label>
                    <Form.Control type='email' id='email' ref={emailReference} required />
                </Form.Group>
                <Form.Group>
                {/* <div className={classes.control}> */}
                    <Form.Label htmlFor='password'>Your Password</Form.Label>
                    <Form.Control
                        type='password'
                        id='password'
                        ref={passwordReference}
                        required
                    />
                </Form.Group>
                <div>
                {/* <div className={classes.actions}> */}
                    { isLoading ? <p>Sending Request...</p> : <Button onClick={authHandler}>Login</Button>  }
                </div>
            </Form>
        </section>
    );
}

export default Auth


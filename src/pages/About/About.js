import React from 'react'
import Container from 'react-bootstrap/Container'
import pic from './about_image.png'

const About = () => {
  return (
    <>
      <Container style={{
        minHeight: 'calc(80vh - 40px)', display: 'flex',
        alignItems: 'flex-start'
      }}>
        <div style={{ width: '100px', height: '100px', objectFit: 'cover' }}>
          <img src={pic} style={{ width: '100px', height: '100px' }} alt="home"></img>
        </div>
        <p style={{ flex: '2' }}>
          Ipsum amet amet accusam sadipscing erat
          sed diam takimata sed, et et ea eirmod est
          sit dolor, ipsum ipsum accusam.
          Ipsum amet amet accusam sadipscing erat
          sed diam takimata sed, et et ea eirmod est
          sit dolor, ipsum ipsum accusam.
          Ipsum amet amet accusam sadipscing erat
          sed diam takimata sed, et et ea eirmod est
          sit dolor, ipsum ipsum accusam.
          Ipsum amet amet accusam sadipscing erat
          sed diam takimata sed, et et ea eirmod est
          sit dolor, ipsum ipsum accusam.
          Ipsum amet amet accusam sadipscing erat
          sed diam takimata sed, et et ea eirmod est
          sit dolor, ipsum ipsum accusam.
          Ipsum amet amet accusam sadipscing erat
          sed diam takimata sed, et et ea eirmod est
          sit dolor, ipsum ipsum accusam.
        </p>
      </Container>
    </>
  )
}

export default About
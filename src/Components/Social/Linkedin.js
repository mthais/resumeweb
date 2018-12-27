import React from 'react'
import { Row, Col, Button } from 'reactstrap'

// Linkedin Button
export const LinkedinButton = () => {
  return (
    <Row>
      <Col>
        <Button className='py-0 pt-1' color='primary' block>
          <Row className='no-gutters'>
            <Col className='text-right'>
              <ion-icon style={ { fontSize: '28px' } } name='logo-linkedin' />
            </Col>
            <Col className='text-left pt-1'>
                        Linked in
            </Col>
          </Row>
        </Button>
      </Col>
    </Row>
  )
}

// End of file

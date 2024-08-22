import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// 로그인 하려면 백엔드 가지고 있어야 함.
// 유저 정보를 가지고 있어야 내가 로그인을 할 수 있음.
// 
const Login = ({ setAuthenticate }) => {
  
  const navigate = useNavigate();
  
  // refresh 막자
  // form을 쓸 때 event.preventDefault를 꼭 써주자 -> 페이지가 계속 refresh 되는 것을 막아줄 수 있다
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true)
    navigate('/')
  }


  return (
    <div className='login'>
      <Container>
        <Row>
          <Col lg={4}>
            <Form onSubmit={(event) => loginUser(event) }>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="danger" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
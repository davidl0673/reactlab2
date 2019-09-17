import React from 'react';
import { Button, Navbar, NavDropdown, Form, FormControl, Nav, Jumbotron, Card } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { MDBJumbotron,  MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";



import myface from "./assets/myface.jpg"
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import './App.css';


const Navigation = () => {

  return (

    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">My portfolio and stuff</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link> <Link to="/"> home</Link></Nav.Link>
            <Nav.Link > <Link to="/contact" > contact </Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}

const JumbotronPage = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>Hipster bullshit</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              className="img-fluid"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                Please like me 
              </MDBCardTitle>
              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a href="google.com"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="twitter.com"><MDBIcon
                    fab
                    icon="twitter"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="facebook.com"><MDBIcon
                    fab
                    icon="facebook-f"
                    className="grey-text"
                    size="lg"
                  /></a>
                </MDBCol>
              </MDBCol>

            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
  }
const Contact = () => {
  return (
    <>
     <Jumbofun/>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Write to us</p>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                Your name
            </label>
              <input
                type="text"
                id="defaultFormContactNameEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Your email
            </label>
              <input
                type="email"
                id="defaultFormContactEmailEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormContactSubjectEx"
                className="grey-text"
              >
                Subject
            </label>
              <input
                type="text"
                id="defaultFormContactSubjectEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormContactMessageEx"
                className="grey-text"
              >
                Your message
            </label>
              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                className="form-control"
                rows="3"
              />
              <div className="text-center mt-4">
                <MDBBtn color="warning" outline type="submit">
                  Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <Card className="facecard" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={myface} />
        <Card.Body>
          <Card.Title>My face</Card.Title>
          <Card.Text>
            I like stuff and things related to that.
          </Card.Text>
          <Button href="https://www.google.com">check my linkd in brah</Button>
        </Card.Body>
      </Card>
    </>
  )
}
const Jumbofun = () => {
  return (

    <Jumbotron className="jumbofun">
      <h1>PROFESSIONAL AS FUCKKKKKK</h1>
      <p>
        monotonectally target world-class networks
      </p>
     
    </Jumbotron>
  )
}




const Imagecard = () => {
  return (
    <div>hi</div>
  )
}


const Home = () => {
  return (
    <>
    
      <Jumbofun />
      <Imagecard />
    <JumbotronPage/>

    </>
  )
}

const App = () => {
  return (
    <Router>

      <Navigation />

      <AnimatedSwitch
        atEnter={{ opacity: 0, }}
        atLeave={{ opacity: 0, }}
        atActive={{ opacity: 1, }}
        className="switch-wrapper"
      >
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />

      </AnimatedSwitch>
    </Router>
  );

  


}
export default App;

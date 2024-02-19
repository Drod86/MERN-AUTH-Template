/* eslint-disable react/prop-types */
import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = ({ heading, blurb, component }) => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">{heading}</h1>
          <p className="text-center mb-4">{blurb}</p>
          {component}
          <div className="d-flex">
            <LinkContainer to="/login">
              <Button variant="primary" href="/login" className="me-3">
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to="/register">
              <Button variant="secondary" href="/register" className="me-3">
                Sign up
              </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;

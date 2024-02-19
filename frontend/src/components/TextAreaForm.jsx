import { Button, Col, Form, Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";

const TextAreaForm = () => {
  return (
    <FormContainer>
      <h2>Whats on your mind</h2>
      <Form onSubmit={""}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        {/* {isLoading && <Loader />} */}

        <Button type="submit" variant="primary" className="mt-3">
          Try me!
        </Button>
      </Form>
    </FormContainer>
  );
};
export default TextAreaForm;

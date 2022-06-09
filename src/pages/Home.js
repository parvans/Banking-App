import "./pagestyle.css";
import { Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container className="Container ">
        <Row >
          <h1 id="welcome" className="text-primary">
            Welcome to Banking Application
          </h1>
        </Row>
      </Container>
    </>
  );
}

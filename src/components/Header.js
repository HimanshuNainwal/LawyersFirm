import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    const searchLawyer = () => {
        
    }
  return (
    <>
    
        <Navbar  bg="light" expand="xl" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Book Your Lawyer</Navbar.Brand>
                <Form className="d-flex" style={{width:"400px"}}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={searchLawyer}
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
          </Container>
        </Navbar>
     
    </>
  );
}

export default Header;
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../contexts/authContext';

function NavigationBar() {
  const { isAuthenticated }  = useContext(AuthContext);
  const { onLogout } = useContext(AuthContext);
  return (

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            {isAuthenticated && (
              <div id="users">
              <Nav.Link href="/addItem">Add Item</Nav.Link>
              <Nav.Link href="/logout" onClick={onLogout}>logout</Nav.Link>
              </div>
            )}
            {!isAuthenticated && (
              <div id="guests">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              </div>
            )}
            <Nav.Link href="/collection">Collection</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  );
}

export default NavigationBar;
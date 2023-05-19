import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import StarRatingComponent from 'react-star-rating-component';


function NavScrollExample({dsp,cn,sf,starF,tf,addmov,showComponent}) {
  const onStarClick=(nextValue, prevValue, name)=> {
    sf(nextValue);}

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Movie Show</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="AddMovie">Add Movie</Nav.Link>
            <NavDropdown title="Display by" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" onClick={dsp}>{cn==='line-container'  ? 'Block' : 'Line'}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <form > 
        <input type='text' placeholder='Search your movie'  name='movietitle' onChange={tf}></input>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={starF}
          onStarClick={onStarClick}
        />
      </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
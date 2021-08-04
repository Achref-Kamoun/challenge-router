import {Nav,Navbar,FormControl,Form} from 'react-bootstrap'

function Navbarr () {
    return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#"></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScrol>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Our-Tour">Our Tour</Nav.Link>
      <Nav.Link href="/Add-New-Tour">Add New Tour</Nav.Link>
    </Nav>
    <br/>
    <Form className="d-flex">
      <FormControl style = {{}} type="search" placeholder="Search" className="mr-2" aria-label="Search" />
      </Form>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navbarr;
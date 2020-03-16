import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
    return (

        <Navbar bg="dark" className='mb-3 container'>
            <Navbar.Brand href="/" className=" text-white">IMDB</Navbar.Brand>
            <Nav className="mr-auto text-white">
                <Nav.Link href="/" className=" text-white">Home</Nav.Link>
                <Nav.Link href="/movies" className=" text-white">Movies</Nav.Link>
                <Nav.Link href="/categories" className=" text-white">Categories</Nav.Link>
                <Nav.Link href="/about" className=" text-white">About</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar>

    )
}

export default Header

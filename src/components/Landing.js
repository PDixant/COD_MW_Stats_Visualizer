import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
class Landing extends Component {
    state = {
        planets : {},
    }
    
    componentDidMount (){
        // TODO: move from
        // fetch("https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/enderrao%231201/profile/type/mp")
        // .then(res => res.json())
        // .then(res => this.setState({ planets: res }))
        // .catch(() => this.setState({ hasErrors: true }));
    }

    render(){
        const { planets } = this.state;
        console.log(JSON.stringify(planets));
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )};
}

export default Landing;
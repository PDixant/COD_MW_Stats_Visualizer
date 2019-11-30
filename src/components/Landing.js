import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
class Landing extends Component {

    componentDidMount() {
        // TODO: move from
        // fetch("https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/enderrao%231201/profile/type/mp")
        // .then(res => res.json())
        // .then(res => this.setState({ planets: res }))
        // .catch(() => this.setState({ hasErrors: true }));
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#">Test</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#deets">Player Stats</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };
}

export default Landing;
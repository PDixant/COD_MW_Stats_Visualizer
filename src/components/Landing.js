import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
class Landing extends Component {
    state = {
        data: {
            recordLongestWinStreak: 8.0,
            recordXpInAMatch: 25432.0,
            accuracy: 0.15818697214126587,
            bestTotalXp: 0.0,
            losses: 272.0,
            score: 1417835.0,
            winLossRatio: 1.4264706373214722,
            totalShots: 165690.0,
            bestScoreXp: 0.0,
            gamesPlayed: 717.0,
            bestSquardKills: 0.0,
            bestSguardWave: 0.0,
            bestConfirmed: 27.0,
            deaths: 12074.0,
            wins: 388.0,
            bestSquardCrates: 0.0,
            kdRatio: 0.7539340853691101,
            bestAssists: 25.0,
            bestFieldgoals: 0.0,
            bestScore: 7005.0,
            recordDeathsInAMatch: 55.0,
            scorePerGame: 1977.4546722454672,
            bestSPM: 762.0,
            bestKillChains: 0.0,
            recordKillsInAMatch: 53.0,
            suicides: 108.0,
            wlRatio: 1.4264706373214722,
            currentWinStreak: 1.0,
            bestMatchBonusXp: 0.0,
            bestMatchXp: 0.0,
            bestSguardWeaponLevel: 0.0,
            bestKD: 4.0,
            kills: 9103.0,
            bestKillsAsInfected: 0.0,
            bestReturns: 0.0,
            bestStabs: 0.0,
            bestKillsAsSurvivor: 0.0,
            timePlayedTotal: 355419.0,
            bestDestructions: 0.0,
            headshots: 1584.0,
            bestRescues: 2.0,
            assists: 2129.0,
            ties: 2.0,
            recordKillStreak: 8.0,
            bestPlants: 0.0,
            misses: 139480.0,
            bestDamage: 0.0,
            bestSetbacks: 0.0,
            bestTouchdowns: 0.0,
            scorePerMinute: 239.35158221704526,
            bestDeaths: 55.0,
            bestMedalXp: 0.0,
            bestDefends: 20.0,
            bestSquardRevives: 0.0,
            bestKills: 53.0,
            bestDefuses: 0.0,
            bestCaptures: 18.0,
            hits: 26210.0,
            bestMiscXp: 0.0,
            bestKillStreak: 8.0,
            bestDenied: 14.0
        },
    }

    componentDidMount() {
        // TODO: move from
        // fetch("https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/enderrao%231201/profile/type/mp")
        // .then(res => res.json())
        // .then(res => this.setState({ planets: res }))
        // .catch(() => this.setState({ hasErrors: true }));
    }
    toDays(time){
        return parseInt(time / (60*60) / 24);
    }
    toHours(time){
        return parseInt(time / (60*60) % 24);
    }
    render() {
        const { data } = this.state;
        return (
            <div>
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
                </Navbar>timePlayedTotal
                <ul>
                    <li>kd: {data.kdRatio.toFixed(2)}</li>
                    <li>games played: {data.gamesPlayed}</li>
                    <li>win: {data.wins}</li>
                    <li>death: {data.deaths}</li>
                    <li>Days played: {this.toDays(data.timePlayedTotal)}, Hours: {this.toHours(data.timePlayedTotal)}</li>
                    <li>suicides: {data.suicides}</li>
                    <li>ties: {data.ties}</li>
                </ul>
            </div>
        )
    };
}

export default Landing;
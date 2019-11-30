import React, { Component } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import CardContainer from './Card'
import styled from 'styled-components';
import Logo from './../COD.png'

const StyledDisplay = styled.div`
display: flex;
width: 100%;
height: 150px;
flex-wrap: wrap;
justify-content: flex-start;
align-content: flex-start;
`;
class InputTextbox extends Component {
    state = {
        profileName: "",
        hasErrors: "",
        myStats: {
            data: {
                lifetime: {
                    all: {
                        properties: {
                        }
                    }
                }
            }
        },
        isPopulated: false,
    }

    getUser(event) {
        this.setState({ profileName: event.target.value })
    }

    getData() {
        const { profileName } = this.state;
        const encodedName = encodeURIComponent(profileName);
        // use this to get api data
        // console.log(encodedName)
        const url = `https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/${encodedName}/profile/type/mp`
        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({
                myStats: res,
                isPopulated: true,
            }))
            .catch(() => this.setState({ hasErrors: true }));
    }

    toDays(time) {
        return parseInt(time / (60 * 60) / 24);
    }
    toHours(time) {
        return parseInt(time / (60 * 60) % 24);
    }

    toRound(num) {
        return parseFloat(num).toFixed(2);
    }

    render() {
        const { myStats, isPopulated } = this.state;

        if (isPopulated) {
            console.log(myStats);
            return (
                <div>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={this.getUser.bind(this)}
                        />
                        <InputGroup.Append>
                            <Button variant="success"
                                onClick={() => this.getData()}
                            >Get Stats</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <StyledDisplay>
                    <CardContainer
                    title='K/D Ratio:'
                    input={this.toRound(myStats.data.lifetime.all.properties.kdRatio)}
                    />
                    <CardContainer
                    title='Games Played:'
                    input={myStats.data.lifetime.all.properties.gamesPlayed}
                    />
                    <CardContainer
                    title='losses:'
                    input={myStats.data.lifetime.all.properties.losses}
                    />
                    <CardContainer
                    title='headshots:'
                    input={myStats.data.lifetime.all.properties.headshots}
                    />
                    <CardContainer
                    title='win'
                    input={myStats.data.lifetime.all.properties.wins}
                    />
                    <CardContainer
                    title='Death:'
                    input={myStats.data.lifetime.all.properties.deaths}
                    />
                    <CardContainer
                    title='Days and Hours played:'
                    input={`Days: ${this.toDays(myStats.data.lifetime.all.properties.timePlayedTotal)}, Hours: ${this.toHours(myStats.data.lifetime.all.properties.timePlayedTotal)}`}
                    />
                    <CardContainer
                    title='Suicides:'
                    input={myStats.data.lifetime.all.properties.suicides}
                    />
                    <CardContainer
                    title='Ties:'
                    input={myStats.data.lifetime.all.properties.ties}
                    />
                    </StyledDisplay>
                </div>
            )
        };
        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={this.getUser.bind(this)}
                    />
                    <InputGroup.Append>
                        <Button variant="success"
                            onClick={() => this.getData()}
                        >Get Stats</Button>
                    </InputGroup.Append>
                </InputGroup>

                <img src={Logo} alt="image"></img>
            </div>
        )
    };
};

export default InputTextbox;
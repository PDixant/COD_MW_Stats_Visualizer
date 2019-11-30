import React, { Component } from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import CardContainer from './Card'
import styled from 'styled-components';

const StyledDisplay = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`;
class InputTextbox extends Component{
    state = { 
        profileName: "",
        hasErrors: "",
        myStats: { 
            data: {
                lifetime:{
                    all:{
                        properties: {
                        }
                    }
                }
            }
        },
    }

    getUser(event){
        this.setState({ profileName: event.target.value})
    }

    getData(){
        const { profileName } = this.state;
        const encodedName = encodeURIComponent(profileName);
        // use this to get api data
        console.log(encodedName)
        const url = `https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/${encodedName}/profile/type/mp`
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({ myStats: res }))
        .catch(() => this.setState({ hasErrors: true }));
    }

    toDays(time){
        return parseInt(time / (60*60) / 24);
    }
    toHours(time){
        return parseInt(time / (60*60) % 24);
    }

    toRound(num){
        return parseFloat(num).toFixed(2);
    }

    render(){
        const { myStats } = this.state;
        
        if(myStats !== undefined){
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
                    title='kd'
                    input={this.toRound(myStats.data.lifetime.all.properties.kdRatio)}
                    />
                    <CardContainer
                    title='games played:'
                    input={myStats.data.lifetime.all.properties.gamesPlayed}
                    />
                    <CardContainer
                    title='win'
                    input={myStats.data.lifetime.all.properties.wins}
                    />
                    <CardContainer
                    title='Death'
                    input={myStats.data.lifetime.all.properties.deaths}
                    />
                    <CardContainer
                    title='Days played'
                    input={`${this.toDays(myStats.data.lifetime.all.properties.timePlayedTotal)}, Hours: ${this.toHours(myStats.data.lifetime.all.properties.timePlayedTotal)}`}
                    />
                    <CardContainer
                    title='suicides'
                    input={myStats.data.lifetime.all.properties.suicides}
                    />
                    <CardContainer
                    title='ties'
                    input={myStats.data.lifetime.all.properties.ties}
                    />
                    </StyledDisplay>
                </div>
            )};
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
            </div>
        )};
};

export default InputTextbox;
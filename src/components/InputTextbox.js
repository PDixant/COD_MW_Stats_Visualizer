import React, { Component } from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import CardContainer from './Card'
class InputTextbox extends Component{
    state = { 
        profileName: "",
        data: {},
        hasErrors: "",
    }

    getUser(event){
        this.setState({ profileName: event.target.value})
    }

    getData(){
        const { profileName } = this.state;
        const encodedName = encodeURIComponent(profileName);
        // use this to get api data
        // console.log(encodedName)
        // const url = `https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/${encodedName}/profile/type/mp`
        // fetch(url)
        // .then(res => res.json())
        // .then(res => this.setState({ data: res }))
        // .catch(() => this.setState({ hasErrors: true }));
    }

    render(){
        const { data } = this.state;
        
        console.log(data);
        if(data.length !== 0){
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
                    <CardContainer
                    title='kd'
                    value="testing"
                    />
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
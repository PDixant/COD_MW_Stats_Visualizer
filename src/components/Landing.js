import React, { Component } from 'react';
import styled from 'styled-components'


const StyledH1 = styled.h1`
text-align: Center;
font-size: 80px;
`;

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
            <div>
                <StyledH1 >Call of Duty: Modern Warfare Player Stats</StyledH1>
            </div>

        )
    };
}

export default Landing;
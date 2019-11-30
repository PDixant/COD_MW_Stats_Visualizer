import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
const InputTextbox = () => {
    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Enter Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                <Button variant="success">Get Stats</Button>
            </InputGroup>
        </div>
    )
};

export default InputTextbox;
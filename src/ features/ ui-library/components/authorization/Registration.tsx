import React, {useState} from 'react';
import './authorization.css'
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import {registration} from "../../../../ service/API/user";
const Registration = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="authorization">
            <div className="authorization__header">Registration</div>
            <Input value={email} setValue={setEmail} type="email" placeholder="Email"/>
            <Input value={phone} setValue={setPhone} type="text" placeholder="Phone number"/>
            <Input type="text" placeholder="Name"/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Password"/>
            <Button disabled={false} onClick={() => registration(email,phone,password)} >Registration</Button>
        </div>
    );
};

export default Registration;
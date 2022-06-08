import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";

const Form = styled.form`
    
    display:flex;
    flex-direction:column;    
    align-items:flex-end;
`;

const Label = styled.label`
    font-weight:bold;
`;

const Input = styled.input`
    width:565px;
    padding:10px;
    margin-bottom:10px;
    margin-left:10px;
`;
const Button = styled.button`
    color: white;
    background-color:#046CFF;
    padding:1em;
    width:80px;
    border:none;
    border-radius:30px;
`;

const ContactForm = (props) => {

    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const dispatch = useDispatch();

    const addContact = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_CONTACT", payload: {name, phoneNumber}});
        setName("");
        setPhoneNumber("");
    }


    return (
        <Form onSubmit={(e)=>addContact(e)}>
            <Label>
                이름
                <Input type="text" placeholder="이름을 입력해주세요" name="name" onChange={(e) => setName(e.target.value)}/>
            </Label>
            <Label>
                연락처
                <Input type="number" placeholder="전화번호를 입력해주세요" name="phone" onChange={(e) => setPhoneNumber(e.target.value)}/>
            </Label>
            <Button type="submit">생성</Button>
        </Form>
    )
}

export default ContactForm;
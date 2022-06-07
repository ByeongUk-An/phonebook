import React from 'react';
import styled from "styled-components";

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
    return(
        <Form>
            <Label>
                이름
                <Input type="text" placeholder="이름을 입력해주세요" name="name"/>
            </Label>
            <Label>
                연락처
                <Input type="number" placeholder="전화번호를 입력해주세요" name="phone"/>
            </Label>
            <Button>생성</Button>
        </Form>
    )
}

export default ContactForm;
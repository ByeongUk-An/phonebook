import React from 'react';
import styled from "styled-components";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";



const Wrapper = styled.div`
    max-width:1400px;
    margin: 0 auto;
    margin-top:100px;
    border-radius:3px;
    border:1px solid lightgrey;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const HeadTitle = styled.h1`
    text-align: center;
    color:white;
    background-color:tomato;
    margin:0;
    
`;

const Container = styled.div`
    display:flex;
    padding 3em;   
    background-color:powderblue;
    height:600px;
`;
const Item = styled.div`
    width:50%;
`;


function App() {
    return (
        <>
            <Wrapper>
                <HeadTitle>나의 연락처 관리</HeadTitle>
                <Container>
                    <Item>
                        <ContactForm/>
                    </Item>
                    <Item>
                        <ContactList/>
                    </Item>
                </Container>
            </Wrapper>
        </>
    );
}

export default App;

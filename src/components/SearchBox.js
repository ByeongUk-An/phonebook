import React from 'react';
import styled from "styled-components";


const Container = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-bottom:30px;
`;

const Input = styled.input`
    width:500px;
    padding:10px;
    
    margin-left:10px;
    
`;
const Button = styled.button`
    color: white;
    background-color:#046CFF;
    padding:1em;
    width:80px;
    border:none;
    border-radius:30px;
    margin-left:20px
`;

const SearchBox = (props) => {
    return (
        <>
    <Container>
        <Input type="text" placeholder="이름검색"/>
        <Button>찾기</Button>
    </Container>
        </>
    )
}

export default SearchBox;
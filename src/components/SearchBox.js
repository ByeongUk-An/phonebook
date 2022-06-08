import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";


const Container = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-bottom:30px;
`;

const Form = styled.form`
    
    
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

    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();

    const searchByName = (e) => {
        e.preventDefault();
        dispatch({type: "SEARCH_BY_USERNAME", payload: {keyword}});
    }

    return (
        <>
            <Container>
                <Form onSubmit={searchByName}>
                    <Input type="text" placeholder="이름검색"   onChange={(event) => setKeyword(event.target.value)}/>
                    <Button type="submit">찾기</Button>
                </Form>
            </Container>
        </>
    )
}

export default SearchBox;
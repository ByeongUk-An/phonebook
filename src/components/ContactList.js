import React from 'react';
import styled from "styled-components";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";

const UnoderList = styled.ul`
    padding:0;
    margin:0;
    margin-left:30px;
`;

const ContactList = (props) => {
    return (
        <>
            <SearchBox/>
            <UnoderList>
                <ContactItem/>
            </UnoderList>
        </>
    )
}

export default ContactList;
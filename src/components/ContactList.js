import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import {useSelector} from "react-redux";

const UnOderList = styled.ul`
    padding:0;
    margin:0;
    margin-left:30px;
`;

const ContactList = (props) => {
    const {contact, keyword} = useSelector((state)=>state);
    const [filteredList,setFilteredList] = useState([]);

    useEffect(() => {
        if(keyword !== "") {
            const list = contact.filter((item)=> item.name.includes(keyword));
            setFilteredList(list);
        }else {
            setFilteredList(contact);
        }
    }, [keyword]);


    return (
        <>
            <SearchBox/>
            <UnOderList>
                {filteredList.map((item,index) => <ContactItem key={index} item={item}/>)}
            </UnOderList>
        </>
    )
}

export default ContactList;
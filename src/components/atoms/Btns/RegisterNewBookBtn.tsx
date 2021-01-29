import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const RegisterNewBookBtn = ({newBook}:any) => {
    const history = useHistory();

    const onClick = () => {
        const csrftoken = Cookies.get('csrftoken');
        // newBook
        
        axios.post(`${process.env.REACT_APP_BASE_URL}/book/register/new/`, {
            headers:{
                "Access-Control-Allow-Origin": '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            data: {
                isbn: newBook.isbn, 
                title: newBook.title,  
                author: newBook.author,  
                thumbnail_image: newBook.thumbnail_image, 
                publisher: newBook.publisher,   
                page: newBook.page as number,   // 따로 설정해줘야함.
                published_date: newBook.published_date,   
                keyword: newBook.keyword, // 따로 설정해줘야함. true인 것만 담아야 해
                genre: newBook.genre, // 따로 설정해줘야함. true인 것만 담아야 해
                subtitle: newBook.subtitle,  // 따로 설정해줘야함.
                description: newBook.description, 
                purchase_link: newBook.purchase_link ? newBook.purchase_link : "" // 따로 설정해줘야함.
            }
        })
        .then((res) => {
            console.log(res);
            window.alert("등록되었노라");
            history.push('/');

            //aler를 주자.
        })
        .catch((err) => console.log(err))    
    };

    return (
        <button onClick={onClick} style={{
            width:'80px',
            height:'40px',
            backgroundColor:'black',
            color:'white',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin: '0 20px',
            textDecoration:'none',
            borderRadius:'7px',
            boxShadow: '3px 2.5px 2px #CBCBCB',
            cursor:'pointer',
            borderWidth:'0'
        }}>등록하기</button>
    );
};

export default RegisterNewBookBtn;
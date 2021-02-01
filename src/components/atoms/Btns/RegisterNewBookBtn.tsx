import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const RegisterNewBookBtn = ({newBook}:any) => {
    const history = useHistory();
    console.log(newBook);
    const genres = ["환경", "디자인", "마케팅", "페미니즘", "기타"];
    const keywords = ['유익한', '감동적인', '영감을 주는'];

    const onClick = () => {
        var newBookGenre = [];
        var newBookKeywords = [];
        // newBook
        for (var i=0; i < genres.length; i++){
            if(newBook.genre[i] === true) {
                newBookGenre.push(genres[i]);
            }
        }
        for (var x=0; x < keywords.length; x++){
            if(newBook.keyword[x] === true) {
                newBookKeywords.push(genres[x]);
            }
        }
        
        const csrftoken = Cookies.get('csrftoken');
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
                author: newBook.authors,  
                thumbnail_image: newBook.thumbnail_image, 
                publisher: newBook.publisher,   
                page: newBook.page as number,  
                published_date: newBook.published_date,   
                keyword: newBookKeywords, 
                genre: newBookGenre, 
                subtitle: newBook.subtitle, 
                description: newBook.description, 
                purchase_link: newBook.purchase_link ? newBook.purchase_link : ""
            }
        })
        .then((res) => {
            console.log(res);
            window.alert("등록되었노라");
            history.push('/');

            //aler를 주자.
        })
        .catch((err) => {
            if(err.response.status === 400) {
                window.alert("해당 isbn을 가진 책이 이미 등록되어 있습니다.")
            }
            console.log(err);
        })    
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
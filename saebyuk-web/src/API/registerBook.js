import Cookies from 'js-cookie';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import NewBookState from 'states/NewBookState';
import {useRecoilValue} from 'recoil';

export default () => {
    const history = useHistory();
    const csrftoken = Cookies.get('csrftoken');
    const newBook = useRecoilValue(NewBookState);
    // newBook
    axios.post('http://127.0.0.1:8000/account/sign-up/kakao/', {
      headers:{
          "Access-Control-Allow-Origin": '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
      },
      data: {
        isbn: "newBook.something", 
        title: "newBook.something",  
        author: "newBook.something",  
        thumbnail_image: "newBook.something", 
        publisher: "newBook.something",   
        page: "newBook.something",    
        published_date: "newBook.something",   // 따로 설정해줘야함.
        keyword: "newBook.something", 
        subtitle: "newBook.something",     // 따로 설정해줘야함.
        description: "newBook.something", 
        purchase_link: "newBook.something" // 따로 설정해줘야함.
      }
    })
    .then((res) => {
        console.log(res);
        history.push('/')
    })
    .catch((err) => console.log(err))
}
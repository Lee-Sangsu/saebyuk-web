import axios from 'axios';
import Kakao from 'kakaojs';
import React from 'react';
import Cookies from 'js-cookie';
import ProfileState from 'states/ProfileState';
import {useSetRecoilState} from 'recoil';
import { Link, useHistory } from "react-router-dom";

const Home = () =>{
  const history = useHistory();
  const setProfile = useSetRecoilState(ProfileState);
  const signIn = () => {
    axios.defaults.xsrfCookieName = "csrftoken"
    axios.defaults.xsrfHeaderName = "X-CSRFToken"
    Kakao.Auth.login({
      scope: 'profile',
      success: (res) => {
        console.log('first res:', res)
        Kakao.Auth.setAccessToken(res.access_token);

        const csrftoken = Cookies.get('csrftoken');
        axios.post('http://127.0.0.1:8000/account/login/kakao/', {
          headers:{
             "Access-Control-Allow-Origin": '*',
             'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken
          },
          data: {
            access_token: res.access_token
          }
        })
        .then((res) => {
          if (res.status === 203) {
              console.log(res.data);
            setProfile(res.data);
            history.push("/sign-up");
          } else if (res.status === 200) {
            console.log(res.data);
            window.alert("login completed");
          }
        })
        .catch((err) => console.log(err))
      }, 
      fail: (err) => {
          console.error(err);
      }
    });
  };


  return (
    <div className="home">
      <button onClick={signIn}>로그인</button>
      <Link to="/book/register/new">신청 및 등록</Link>
    </div>
  );
}

export default Home;

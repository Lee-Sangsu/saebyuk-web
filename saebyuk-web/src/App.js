import axios from 'axios';
import Kakao from 'kakaojs';
import React from 'react';
import Cookies from 'js-cookie';

function App() {
  
  React.useEffect(( ) => {
    window.Kakao.init('ef9a576a8e9f7b59585eb0e36c820fad');
    Kakao.isInitialized();
  }, []);
  
  const login = () => {
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
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
      }, 
      fail: (err) => {
          console.error(err);
      }
    });
  };


  return (
    <div className="App">
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default App;

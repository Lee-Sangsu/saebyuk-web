import axios from 'axios';
import Kakao from 'kakaojs';
import React from 'react';
import Cookies from 'js-cookie';

function App() {
  const [profile, setProfile] = React.useState({});
  const [gSchoolNickname, setNickname] = React.useState('');
  
  React.useEffect(( ) => {
    window.Kakao.init('ef9a576a8e9f7b59585eb0e36c820fad');
    Kakao.isInitialized();
  }, []);

  const signUp = () => {
    console.log(profile);
    const kakao_profile_info = profile.kakao_profile;
    console.log(kakao_profile_info);
    const csrftoken = Cookies.get('csrftoken');
    axios.post('http://127.0.0.1:8000/account/sign-up/kakao/', {
      headers:{
          "Access-Control-Allow-Origin": '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
      },
      data: {
        kakao_id: profile.kakao_id,
        g_school_nickname: gSchoolNickname,
        kakao_nickname: kakao_profile_info.nickname,
        profile_image: kakao_profile_info.thumbnail_image_url,
        access_token: profile.access_token
      }
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err))



  }
  
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
          // const kakaoProfile = JSON.parse(JSON.stringify(res));
          if (res.status === 203) {
            setProfile(res.data);
          } else if (res.status === 200) {
            console.log(res.data);
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
    <div className="App">
      <button onClick={signIn}>로그인</button>
      <input type="text" value={gSchoolNickname} onChange={(e) => setNickname(e.target.value)} maxLength={2} />
      <button onClick={signUp}>닉네임 등록</button>
    </div>
  );
}

export default App;

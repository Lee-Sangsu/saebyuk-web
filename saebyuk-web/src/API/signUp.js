import { useHistory } from "react-router-dom";
import ProfileState from 'states/ProfileState';
import {useRecoilValue} from 'recoil';
import axios from 'axios';
import Cookies from 'js-cookie';

export default  (gSchoolNickname) => {

    const history = useHistory();
    const profile = useRecoilValue(ProfileState);

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
        history.push('/')
    })
    .catch((err) => console.log(err))
};
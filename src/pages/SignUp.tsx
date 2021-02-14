import React from "react";
import { useHistory } from "react-router-dom";
import ProfileState from 'states/ProfileState';
import {useRecoilValue} from 'recoil';
import axios from 'axios';
import Cookies from 'js-cookie';
import { TextInput } from "components/atoms/TextInputs";
import { SignUpBtn } from "components/atoms/Btns";
import {  ColumnFlex } from "styles/FlexStyles";
import { AlertTitle } from "components/atoms/Texts/Titles";

const SignUp = () => {
    const [gSchoolNickname, setNickname] = React.useState('');
    const history = useHistory();
    const profile = useRecoilValue(ProfileState);
    const [isWritten, setWritten] = React.useState(false);

    React.useEffect(() => {
        if (gSchoolNickname.length > 1){
            setWritten(true);
        } else {
            setWritten(false);
        }
    }, [gSchoolNickname, setWritten])
    
    const signUp = () => {
        // console.log(profile);
        const kakao_profile_info = profile.kakao_profile;
        // console.log(kakao_profile_info);
        // const csrftoken = Cookies.get('csrftoken');
        axios.post(`${process.env.REACT_APP_BASE_URL}/account/sign-up/kakao/`, {
          headers:{
              "Access-Control-Allow-Origin": '*',
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          data: {
            kakao_id: profile.kakao_id,
            g_school_nickname: gSchoolNickname,
            kakao_nickname: kakao_profile_info.nickname,
            profile_image: kakao_profile_info.thumbnail_image_url || '',
            access_token: profile.access_token
          }
        })
        .then((res) => {
            // console.log(res);
            window.sessionStorage.setItem('user', gSchoolNickname);
            window.location.reload();
            history.push('/saebyuk-web/')
        })
        .catch((err) => console.log(err))
    };

    return (
        <div style={{
            ...ColumnFlex, 
            width: '100%',
            height: '600px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: '60px'
        }}>
            <AlertTitle text="회원가입" />
            <div style={{...ColumnFlex, alignItems:'center', paddingTop: '80px'}}>
                <TextInput value={gSchoolNickname} onChange={(e:any) => setNickname(e.target.value)} maxLength={2} placeholder="거꾸로캠퍼스에서 사용하는 별명을 입력해주세요." />
                <SignUpBtn isWritten={isWritten} signUp={signUp} />
            </div>
        </div>
    )
};

export default SignUp;

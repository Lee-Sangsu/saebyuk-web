import {atom} from 'recoil';

const ProfileState = atom({
    key: 'profileState',
    default: {
        kakao_id: '',
        access_token: '',
        kakao_profile: {
            nickname: '',
            thumbnail_image_url: ''
        }
    }
});

export default ProfileState;
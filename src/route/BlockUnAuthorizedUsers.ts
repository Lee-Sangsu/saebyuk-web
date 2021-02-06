import { useHistory } from 'react-router-dom';

export function BlockUnauthorizedUsers() {
    const history = useHistory();
    if(window.localStorage.getItem('user') === null || undefined){
        console.log('왜 안걸리지 여기');
        window.alert("로그인이 필요합니다.");
        history.push('/')
    } else {
        return ;
    }
};
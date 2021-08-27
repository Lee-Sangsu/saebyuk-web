import React from 'react';
import RequestBook from 'components/organisms/RequestBook';
import FAQ from 'components/organisms/FAQ';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInSelector } from 'states/IsLoggedInState';

const ReqOrRegBook = () => {
    const history = useHistory();
    const isLoggedIn = useRecoilValue(isLoggedInSelector);
    
    React.useEffect(() => {
        if (isLoggedIn === false) {
        history.goBack();
        window.alert("로그인이 필요합니다"); 
    }}, [history, isLoggedIn])

    return (
        <div style= {{
            display:'flex',
            width:'85%',
            marginLeft:'5%',
            height:window.innerHeight,
            justifyContent: 'center'
        }}>

            <RequestBook />
            
            {/*vertical line*/}
            <span style={{
                borderLeft: '2px solid #B3B3B3',
                height: '50%',
                marginTop: '20%'
            }} />

            <FAQ /> 
        </div>
    )
};

export default ReqOrRegBook;
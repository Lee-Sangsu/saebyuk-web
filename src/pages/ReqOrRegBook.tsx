import React from 'react';
import SearchNewBook from 'components/organisms/SearchNewBook';
import RequestBook from 'components/organisms/RequestBook';
import FAQ from 'components/organisms/FAQ';
import { useHistory } from 'react-router-dom';

const ReqOrRegBook = () => {
    const history = useHistory();
    React.useEffect(() => {
        if (window.localStorage.getItem('user') === null || window.localStorage.getItem('user') ===  undefined) {
        history.goBack();
        window.alert("로그인이 필요합니다"); 
    }}, [history])

    const userNickName = window.localStorage.getItem('user');

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
            
            {/* Admin User Check */}
            {userNickName === `${process.env.REACT_APP_ADMIN_USER_NAME}` || userNickName ===  `${process.env.REACT_APP_DEVELOPER_NAME}` ? <SearchNewBook /> : <FAQ /> }
        </div>
    )
};

export default ReqOrRegBook;
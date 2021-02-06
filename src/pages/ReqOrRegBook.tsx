import React from 'react';
import SearchNewBook from 'components/organisms/SearchNewBook';
import RequestBook from 'components/organisms/RequestBook';
import FAQ from 'components/organisms/FAQ';
import { BlockUnauthorizedUsers } from 'route/BlockUnAuthorizedUsers';

const ReqOrRegBook = () => {
    BlockUnauthorizedUsers();

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
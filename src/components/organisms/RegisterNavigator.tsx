import React from 'react';
import NextorBackBtn from 'components/atoms/Btns/NextorBackBtn';
import RegisterNewBookBtn from 'components/atoms/Btns/RegisterNewBookBtn';
import EmptyState from 'states/EmptyState';
import {useRecoilValue} from 'recoil';

const RegisterNavigator = ({toPrev, isRegister, genreChecked, item, toNext}:any) => {
    const isEmpty = useRecoilValue(EmptyState);
    return (
        <div style={{
            width: '350px',
            display:'flex',
            justifyContent:'space-around'
        }}>
           <NextorBackBtn to={toPrev} text="이전" /> 
        
            {isRegister ? 
            <RegisterNewBookBtn newBook={item}/>
            :
            <NextorBackBtn isEmpty={isEmpty} to={toNext} text="다음" />
            }
        </div>
    )
};

export default RegisterNavigator;
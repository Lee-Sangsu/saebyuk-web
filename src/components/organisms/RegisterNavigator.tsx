import React from 'react';
import {NextorBackBtn, RegisterNewBookBtn} from 'components/atoms/Btns';
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
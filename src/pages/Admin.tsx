import React from 'react';
import { ColumnFlex, loginBtnStyle, RowFlex } from 'styles/FlexStyles';
import { isLoggedInSelector } from 'states/IsLoggedInState';
import { useRecoilValue } from 'recoil';
import SearchNewBook from 'components/organisms/SearchNewBook';


export const Admin = () => {
    const [password, setPassword] =  React.useState("");
    const [locked, setLocked] = React.useState(true);
    const isLoggedIn = useRecoilValue(isLoggedInSelector);

    const passwordCheck = () => {
        if (password === "ansgod" || "문행" || "ANSGOD") {
            if (isLoggedIn) {
                setLocked(false);
            } else {
                window.alert("로그인 먼저 해주세요.");
            }
        } else {
            window.alert("Wrong password");
        }
    };

    return (
        <div style={{...ColumnFlex, justifyContent: 'center', alignItems: 'center', height: window.innerHeight - 85}}> 
            {locked ? <>
            <form style={RowFlex}>
                <input type="password" placeholder="Enter the password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                <button type="submit" style={{...loginBtnStyle, marginLeft: '10px'}} onClick={passwordCheck}>Enter</button> 
            </form> </>            
            : <SearchNewBook /> }
        </div>
    )
};
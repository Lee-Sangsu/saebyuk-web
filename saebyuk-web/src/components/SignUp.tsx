import React from "react";
import signUp from 'API/signUp';

const SignUp = () => {
    const [gSchoolNickname, setNickname] = React.useState('');

    return (
        <div>
            <input type="text" value={gSchoolNickname} onChange={(e) => setNickname(e.target.value)} maxLength={2} />
            <button onClick={() => signUp(gSchoolNickname)}>회원 가입</button>
        </div>
    )
};

export default SignUp;

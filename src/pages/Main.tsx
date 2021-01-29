import GetBooksInMain from 'components/organisms/GetBooksInMain';
import SignIn from 'components/atoms/Btns/SignInBtn';
import React from 'react';
import { Link } from "react-router-dom";


const Main = () => {
    return (
      <div className="main">
          <SignIn />
          <Link to="/book/register/new">신청 및 등록</Link>
          <GetBooksInMain />
      </div>
    );
};

  

  
 export default Main;
  
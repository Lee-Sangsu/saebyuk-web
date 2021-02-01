import GetBooksInMain from 'components/organisms/GetBooksInMain';
import {SignInBtn} from 'components/atoms/Btns';
import React from 'react';
import { Link } from "react-router-dom";


const Main = () => {
    return (
      <div className="main">
          <SignInBtn />
          <Link to="/book/register/new">신청 및 등록</Link>
          <GetBooksInMain />
      </div>
    );
};

  

  
 export default Main;
  
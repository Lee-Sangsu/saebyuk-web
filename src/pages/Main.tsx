import GetBooksInMain from 'components/GetBooksInMain';
import SignIn from 'components/SignIn';
import React from 'react';


const Main = () => {
    return (
      <div className="main">
          <SignIn />
          <GetBooksInMain />
      </div>
    );
};

  

  
 export default Main;
  
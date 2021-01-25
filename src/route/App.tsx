// import Kakao from 'kakaojs';
import React from 'react';
import AppRouter from 'route/Router';

function App() {
  React.useEffect(( ) => {
    window.Kakao.init(`${process.env.REACT_APP_KAKAO_JS_KEY}`);
    window.Kakao.isInitialized();
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

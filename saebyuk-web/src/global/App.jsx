import Kakao from 'kakaojs';
import React from 'react';
import AppRouter from 'global/Router';

function App() {
  React.useEffect(( ) => {
    window.Kakao.init(`${process.env.KAKAO_KEY}`);
    Kakao.isInitialized();
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

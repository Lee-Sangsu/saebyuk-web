import Kakao from 'kakaojs';
import React from 'react';
import AppRouter from 'global/Router';

function App() {
  React.useEffect(( ) => {
    window.Kakao.init('ef9a576a8e9f7b59585eb0e36c820fad');
    Kakao.isInitialized();
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

// import Kakao from 'kakaojs';
import React from 'react';
import AppRouter from 'route/Router';
import {useRecoilValue} from 'recoil';
import InitializeState from 'states/InitializeState';

function App() {
  const init = useRecoilValue(InitializeState);

  React.useEffect(( ) => {
    window.Kakao.init(`${process.env.REACT_APP_KAKAO_JS_KEY}`);
    window.Kakao.isInitialized();
  }, []);
  
  return (
    <div style={{
      minWidth: '855px'
    }} className="App">
      {init?<AppRouter />:<AppRouter />}
    </div>
  );
}

export default App;

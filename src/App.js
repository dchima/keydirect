import { isAndroid, isIOS } from 'react-device-detect';
import { Helmet } from 'react-helmet';
import logo from './logo.png';
import './App.css';

function App() {
  // if (isFirefox) window.location.replace('https://www.google.com');
  if (isIOS) window.location.replace('https://apps.apple.com/ng/app/keymobile/id1332114961')
  if (isAndroid) window.location.replace('https://play.google.com/store/apps/details?id=com.qucoon.keystonemobilebankingapp&hl=en&gl=US')
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>KeyMobile</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content='KeyMobile App' />
        <meta name="twitter:description" content='Banking made easy with Keystone Bank' />
        <meta name="twitter:image" content='https://res.cloudinary.com/dxnchima/image/upload/v1615642373/keystone/logo_axwnvj.ico' />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          redirecting you to our mobile app...
        </p>
      </header>
    </div>
  );
}

export default App;

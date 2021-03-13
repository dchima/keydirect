import { isAndroid, isIOS, isFirefox } from 'react-device-detect';
import logo from './logo.svg';
import logo1 from './logo.png';
import './App.css';

function App() {
  // if (isFirefox) window.location.replace('https://www.google.com');
  if (isIOS) window.location.replace('https://apps.apple.com/ng/app/keymobile/id1332114961')
  if (isAndroid) window.location.replace('https://play.google.com/store/apps/details?id=com.qucoon.keystonemobilebankingapp&hl=en&gl=US')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <p>
          redirecting you to our mobile app...
        </p>
      </header>
    </div>
  );
}

export default App;

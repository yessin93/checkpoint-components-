import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './components/ProfilePhoto';
import FullName from './components/FullName';
import Adress from './components/Adress';


function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from '../src/components/header/HeaderNavigation'
import Register from '../src/pages/register/Regsiter'
import BackgroundImage from './components/backgroundImage/BackgroundImage';

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <Register />
    </div>
  );
}
export default App;

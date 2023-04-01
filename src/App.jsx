
import './App.css';
import HomePage from './pages/home/homepage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Route  path='/' component={HomePage} exact/>
   
    
    
    </div>
  );
}

export default App;

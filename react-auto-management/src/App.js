import './App.css';
import {BrowserRouter as Rounter, Routes, Route} from 'react-router-dom';
import ListCarsComponent from './components/ListCarsComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateCarComponent from './components/CreateCarComponent';

function App() {
  return (
    <div>
      <Rounter> 
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element = {<ListCarsComponent />} />
            <Route path="/cars" element = {<ListCarsComponent />} />
            <Route path="/add-car" element = {<CreateCarComponent />} />
          </Routes>
        </div>
      </Rounter>
    </div>

    
 

  );
}

export default App;


import Signup from './components/signup/SignUp';
import Signin from './components/signin/Signin';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './page/Home';
import "./App.css"


function App() {
  return (
    <div className="App">
      
      <Router>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

import AddFlight from './components/Formulaire';
import Flights from './page/Flights';
import FlightList from './components/Flight_List';
import Signup from './components/signup/SignUp';
import Signin from './components/signin/Signin';

function App() {
  return (
    <div className="App">
      
     <Flights/>
     <FlightList />
     <AddFlight/>
     <Route path="/signin" element={<Signin/>} />
     <Route path="/signup" element={<Signup/>} />
    </div>
  );
}

export default App;

import Flights from './Flights';
import AddFlight from '../components/Formulaire';
import FlightList from '../components/Flight_List';
import Navbarr from '../components/Navbar';

export default function Home(){
    return(
        <div>
            <Navbarr/>
            <Flights/>
            <FlightList/>
            <AddFlight/>
        </div>
    );
}

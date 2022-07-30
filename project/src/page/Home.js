import Flights from './Flights';
import AddFlight from '../components/Formulaire';
import FlightList from '../components/Flight_List';
import Navbarr from '../components/Navbar';
import "./home.css"

export default function Home(){
    return(
        <div className='home'>
            <Navbarr/>
            <Flights/>
            <FlightList/>
            <AddFlight/>
        </div>
    );
}

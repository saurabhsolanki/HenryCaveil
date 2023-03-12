import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './Components/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import ContactForm from './Pages/ContactPage/ContactForm';
import Footer from './Components/Footer';
import AllRoute from './AllRoutes/AllRoute';
import WhatsApp from './Components/WhatsApp';

function App() {
  return (
    <div >
      <TopNavbar sticky="top"/>
      <AllRoute/>
      <WhatsApp/>
      <Footer/>
    </div>
  );
}

export default App;

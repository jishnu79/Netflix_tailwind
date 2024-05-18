import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import './input.css'
import LayOut from './LayOut/LayOut';
import AboutUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import Movies from './Screens/Movies';
import NotFound from './Screens/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

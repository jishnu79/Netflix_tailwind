import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import './input.css'
import LayOut from './LayOut/LayOut';
import NotFound from './Screens/NotFound';
import ContactUs from './Screens/ContactUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

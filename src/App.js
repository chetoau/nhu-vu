import "./global.css";
import Homepage from "./components/Homepage";
import Header from './components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contacts from './components/Contacts'
import { Helmet } from 'react-helmet';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

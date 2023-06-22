import styles from "./global.css";
import Homepage from "./components/Homepage";
import Header from './components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contacts from './components/Contacts'
import { useState, useEffect } from 'react';
import Loading from './components/Loading'

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3999);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.mainContent}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </BrowserRouter>
        </div>
      )
      }
    </>
  );
}

export default App;

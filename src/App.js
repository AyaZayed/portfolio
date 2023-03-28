import "./css/App.css";
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

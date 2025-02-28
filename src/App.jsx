import { Routes } from 'react-router-dom';
import Weather from './pages/Weather'



export default function App() {
  return (
    <Routes>
      <Rout path="/" element={<Home />} />
      <Rout path="/weather" element={<Weather />} />
      <Rout path="/map" element={<Map />} />
      <Rout path="/about" element={<About />} />
    </Routes>
  );
}



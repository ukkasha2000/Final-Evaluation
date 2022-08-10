import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='mobiles' element={<Mobiles />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

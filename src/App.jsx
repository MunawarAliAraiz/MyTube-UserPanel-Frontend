// App.js
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultSidebar from './components/DefaultSidebar';
import Home from './pages/Home';
import Credentials from './pages/Credentials';
import PageDetail from './pages/PageDetail'; // Import the new PageDetail component
import VideoPage from './pages/Video';
import Login from './pages/Login';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className='flex flex-col md:flex-row'>
        <DefaultSidebar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/credentials' element={<Credentials />} />
          <Route path='/page/:id' element={<PageDetail />} /> {/* New route for PageDetail */}
          <Route path='/page/:pageId/video/:videoId' element={<VideoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

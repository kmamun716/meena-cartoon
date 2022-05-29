import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <div className="container mt-2">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/about-us' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

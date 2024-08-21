import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Activities from './pages/Activities';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Activities />} />
          {/* <Route path='/Category/:categoryId' element={<CategoryPage/>} /> */}
          {/* <Route path='/activity/:activityId' element={<ActivityDetail />} /> */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

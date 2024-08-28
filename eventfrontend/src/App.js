import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Activity from './pages/ActivityPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import EventCards from './components/Cards/EventCards';





function App() {
  return (
    <Router>
     
        <Navbar />
        <EventCards></EventCards>
         <Routes> 

            <Route path='/' element={<Activity />} /> 
          {/* <Route path='/Category/:categoryId' element={<CategoryPage/>} /> */}
          {/* <Route path='/activity/:activityId' element={<ActivityDetail />} /> */}
         </Routes> 
        
        <Footer />
     
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import CourseList from './pages/CourseList';
import CourseDetails from './pages/CourseDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={ <Login />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={ <Register />} />
        <Route path='/courses' element={ <CourseList/> } />
        <Route path='/courses/:id' element={ <CourseDetails/> } />
      </Routes>
    </Router>
  );
}

export default App;
import { useEffect } from 'react';
import { getLawyerData } from './store/lawyerActions';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import Spinner from 'react-bootstrap/Spinner';

import Header from './components/Header';
import HomePage from './pages/HomePage'

import './App.css';
import LawyerPage from './pages/LawyerPage';


function App() {
  const {loader} = useSelector(state => state.ui)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLawyerData())
  },[])

  return (
    <div className="App">
      <Header/>
      {loader && <Spinner animation="border" variant="primary" />}

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/:id" element={<LawyerPage/>}  />
      </Routes>
    </div>
  );
}

export default App;

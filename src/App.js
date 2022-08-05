import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import MovieDetail from './components/Movie_Detail/moviedetail';
import PageNotFound from './components/PageNotFound/pagenotfound';

function App() {
  return (

    <div className="App">
      <Router>
        <Header></Header>
        <div className="body-space">
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/movie/:id' element={<MovieDetail></MovieDetail>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>


  );
}

export default App;

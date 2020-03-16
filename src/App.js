import React from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies'
import Categories from './components/Categories'
import About from './components/About'
import Hata from './components/Hata'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {
  return (
    //container sayfanin % 80 ini kapliyor
    // <div className="container">  

    //  "/"  Anasyfayı gosteriyor
    <div>  
      <Header />
      <Switch>
          <Route exact path="/" component= { Home } />
          <Route path="/movies" component= { Movies } />
          <Route path="/categories" component= { Categories } />
          <Route path="/about" component= { About } />
          <Route component= { Hata } />
      </Switch>
    </div>
    // exact path="/" yazdigimiz icin diger path lerde sorun oladı. aeger yazmassak hepsi anasayfayi gosterir.
  );
}

export default App;

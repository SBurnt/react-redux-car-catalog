import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../App.css';

import FormAddCar from './FormAddCar';
import CarsList from './CarsList';
import CarInfo from './CarInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row wrapper">
          <div className="col-md-3">
            <Route exact path="/" component={FormAddCar} />
          </div>
          <div className="col-md-9">
            <Route exact path="/" component={CarsList} />
          </div>
        </div>
        <Route exact path="/:car/:id" component={CarInfo} />
      </div>
    </BrowserRouter>
  );
}

export default App;

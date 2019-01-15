/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { deleteCars, sortCars } from '../actions';

function CarsList(props) {
  console.log('CarsList props', props);

  return (
    <div className="row">
      {props.carsToComponent.map(cars => (
        <div className="col-sm-4 col-lg-4 col-md-4" key={cars.id}>
          <div className="card">
            <div className="card-img">
              <img
                className="card-img-top"
                src={cars.image}
                alt={cars.makeId}
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <Link to={`/${cars.makeId}/${cars.id}`}>
                  {`${cars.makeId} ${cars.model}`}
                </Link>
              </h4>
              <h4 className="card-title">${cars.price}</h4>
              <p className="card-text">
                {_.take(cars.description, 60)}...
              </p>
              <p className="itemButton">
                <button type="button" className="btn btn-primary">Buy Now!</button>
                <Link to={`/${cars.makeId}/${cars.id}`} className="btn btn-outline-primary">More info</Link>
              </p>
              <button type="button" className="btn btn-danger" onClick={() => { props.deleteCars(cars.id); }}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// перегоняем необходимые ключи стейта в пропсы нашей компоненты
function mapStateToProps(state) {
  return {
    carsToComponent: state.cars,
  };
}

// подключение данных и экшн креэйторов к компоненте
export default connect(mapStateToProps, { deleteCars, sortCars })(CarsList);

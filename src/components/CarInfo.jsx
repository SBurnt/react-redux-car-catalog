/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function CarInfo(props) {
  console.log('CarInfo props', props);

  const idCarPage = props.match.params.id;
  console.log('idPage', idCarPage);

  // найти необходимое ID среди всех
  const currentCarID = props.carsToComponent.filter(car => car.id === idCarPage);
  console.log('currentCarID', currentCarID);

  const car = currentCarID[0];

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="thumbnail">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="img-thumbnail"
                    src={car.image}
                    alt={car.makeId}
                  />
                </div>
                <div className="col-md-6">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <h5>Vehicle Type - </h5>
                      <h5>{car.vehicleType}</h5>
                    </li>
                    <li className="list-group-item">
                      <h5>Engine - </h5>
                      <h5>{car.engine}</h5>
                    </li>
                    <li className="list-group-item">
                      <h5>Transmission - </h5>
                      <h5>{car.transmission}</h5>
                    </li>
                    <li className="list-group-item">
                      <h5>Location - </h5>
                      <h5>{car.location}</h5>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="caption-full">
                <h4 className="card-title">
                  {`${car.makeId} ${car.model}`}
                </h4>
                <h4 className="card-title">${car.price}</h4>
                <p>{car.description}</p>
              </div>
            </div>

          </div>
          <div className="col-md-3">
            <Link to="/" className="btn btn-info btn-block">Back</Link>
            <button
              type="button"
              className="btn btn-success btn-block"
              // onClick={() => editDataCar(car.id)}
            >
              Edit data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function mapStateToProps(state) {
  return {
    carsToComponent: state.cars,
  };
}

export default connect(mapStateToProps)(CarInfo);

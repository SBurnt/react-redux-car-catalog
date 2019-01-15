/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCars } from '../actions';

class FormAddCar extends Component {
  constructor() {
    super();

    this.state = {
      makeId: '',
      model: '',
      description: '',
      price: '',
      image: '',
      engine: '',
      vehicleType: '',
      location: '',
      transmission: '',
    };

    this.inputData = this.inputData.bind(this);
    this.addCars = this.addCars.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  inputData(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addCars(e) {
    e.preventDefault();

    // сложили данные вместе
    const newCars = {
      makeId: this.state.makeId,
      model: this.state.model,
      description: this.state.description,
      price: this.state.price,
      image: this.state.image,
      engine: this.state.engine,
      vehicleType: this.state.vehicleType,
      location: this.state.location,
      transmission: this.state.transmission,
    };

    // newCars -> store
    // вызываем экшн addCars на reducer
    this.props.addCars(newCars);
    this.resetForm();
  }

  resetForm() {
    this.setState({
      makeId: '',
      model: '',
      description: '',
      price: '',
      image: '',
      engine: '',
      vehicleType: '',
      location: '',
      transmission: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.addCars}>
        <div className="form-group">
          <select value={this.state.makeId} name="makeId" className="form-control" onChange={this.inputData}>
            <option defaultValue>Make</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Mercede-Benz">Mercede-Benz</option>
          </select>
        </div>
        <div className="form-group">
          <input value={this.state.model} name="model" className="form-control" placeholder="Model" onChange={this.inputData} />
        </div>
        <div className="form-group">
          <textarea value={this.state.description} name="description" className="form-control" placeholder="Description" onChange={this.inputData} />
        </div>
        <div className="form-group">
          <input value={this.state.price} name="price" className="form-control" type="number" placeholder="Price" onChange={this.inputData} />
        </div>
        <div className="form-group">
          <input value={this.state.image} name="image" className="form-control" type="url" placeholder="URL Image - https://image..." onChange={this.inputData} />
        </div>
        <div className="form-group">
          <select value={this.state.engine} name="engine" className="form-control" onChange={this.inputData}>
            <option defaultValue>Engine</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div className="form-group">
          <select value={this.state.vehicleType} name="vehicleType" className="form-control" onChange={this.inputData}>
            <option defaultValue>Vehicle Type</option>
            <option value="Saloon">Saloon</option>
            <option value="Off-road Vehicle">Off-road Vehicle</option>
            <option value="Coupe">Coupe</option>
            <option value="Cabriolet">Cabriolet</option>
          </select>
        </div>
        <div className="form-group">
          <select value={this.state.location} name="location" className="form-control" onChange={this.inputData}>
            <option defaultValue>Location</option>
            <option value="Minsk">Minsk</option>
            <option value="Brest">Brest</option>
            <option value="Grodno">Grodno</option>
            <option value="Gomel">Gomel</option>
          </select>
        </div>
        <div className="form-group">
          <select value={this.state.transmission} name="transmission" className="form-control" onChange={this.inputData}>
            <option defaultValue>Transmission</option>
            <option value="Automatic transmission">Automatic transmission</option>
            <option value="Manual gearbox">Manual gearbox</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">Add</button>
        <button type="button" className="btn btn-outline-primary" onClick={this.resetForm}>Reset</button>
      </form>
    );
  }
}

// 1 данные
// 2 действия
// connect(1,2)
export default connect(null, { addCars })(FormAddCar);

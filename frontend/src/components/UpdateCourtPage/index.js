import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkUpdateCourt, thunkDeleteCourt } from '../../store/courts';
import { useHistory, useParams } from 'react-router-dom'

function UpdateCourtPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const user = useSelector(state => state.session.user)
  const court = useSelector(state => state.courts)
  const oneCourt = court[id]
  const [name, setName] = useState(oneCourt.name);
  const [description, setDescription] = useState(oneCourt.description);
  const [address, setAddress] = useState(oneCourt.address);
  const [city, setCity] = useState(oneCourt.city);
  const [state, setState] = useState(oneCourt.state);
  const [country, setCountry] = useState(oneCourt.country);
  const [price, setPrice] = useState(oneCourt.price);
  const [userId] = useState(user.id);
  const [errors, setErrors] = useState([]);


  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const editedCourt = {
      id,
      userId,
      description,
      address,
      city,
      state,
      country,
      name,
      price,
    };
    e.preventDefault();
    dispatch(thunkUpdateCourt(editedCourt, id));
    history.push('/courts')
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(thunkDeleteCourt(court, id))
    history.push('/courts')
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/courts')
  }

  return (
    <>
      <h1>Edit Court</h1>
      <form className='court-form' onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, id) => (
            <li key={id}>{error}</li>
          ))}
        </ul>
        <label>
          Name
          <input
            type="text"
            placeholder='Name'
            value={name}
            onChange={updateName}
            required
          />
        </label>
        <label>
          Address
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={updateAddress}
            required
          />
        </label>
        <label>
          City
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={updateCity}
            required
          />
        </label>
        <label>
          State
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={updateState}
            required
          />
        </label>
        <label>
          Country
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={updateCountry}
            required
          />
        </label>
        <label>
          Description
          <textarea
            type="text"
            placeholder="Description"
            value={description}
            onChange={updateDescription}
            required
          />
        </label>
        <label>
          Price
          <input
            type="text"
            placeholder="$/hour"
            value={price}
            onChange={updatePrice}
            required
          />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
        <button type="button" onClick={handleDeleteClick}>Delete</button>
      </form>
    </>
  );
}

export default UpdateCourtPage;
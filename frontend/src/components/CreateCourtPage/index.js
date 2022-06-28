import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateCourt } from '../../store/courts';
import { Redirect } from 'react-router-dom'

function CreateCourtPage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState('');
  const [userId] = useState(user.id);
  const [errors, setErrors] = useState([]);


  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);


  useEffect(() => {
    dispatch(thunkCreateCourt());
  }, [dispatch])

  const handleSubmit = async (e) => {
    const court = {
      description,
      address,
      city,
      state,
      country,
      name,
      price,
    };
    e.preventDefault();
    dispatch(thunkCreateCourt(court));
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <h1>Court Form</h1>
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
            value={name}
            onChange={updateName}
            required
          />
        </label>
        <label>
          Address
          <input
            type="text"
            value={address}
            onChange={updateAddress}
            required
          />
        </label>
        <label>
          City
          <input
            type="text"
            value={city}
            onChange={updateCity}
            required
          />
        </label>
        <label>
          State
          <input
            type="text"
            value={state}
            onChange={updateState}
            required
          />
        </label>
        <label>
          Country
          <input
            type="text"
            value={country}
            onChange={updateCountry}
            required
          />
        </label>
        <label>
          Description
          <textarea
            type="text"
            value={description}
            onChange={updateDescription}
            required
          />
        </label>
        <label>
          Price
          <textarea
            type="text"
            value={price}
            onChange={updatePrice}
            required
          />
        </label>
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </form>
    </>
  );
}

export default CreateCourtPage;

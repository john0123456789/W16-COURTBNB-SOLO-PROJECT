import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkCreateCourt } from '../../store/courts';
import { useHistory } from 'react-router-dom'
import './CreateCourtPage.css';

function CreateCourtPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user)
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState('');
  const [userId] = useState(user.id);
  const [errors, setErrors] = useState([]);

  const updateUrl = (e) => setUrl(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);

  const handleSubmit = async (e) => {
    const court = {
      userId,
      url,
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
    history.push('/courts')
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/courts')
  }

  return (
    <>
      <h1 className="addCourtTitle">Add Court</h1>
    <body className="courtBody">
      <form className='court-form' onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder='Name'
            value={name}
            onChange={updateName}
          />
        </label>
        <label>
          Address
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={updateAddress}
          />
        </label>
        <label>
          City
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={updateCity}
          />
        </label>
        <label>
          State
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={updateState}
          />
        </label>
        <label>
          Country
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={updateCountry}
          />
        </label>
        <label>
          Description
          <textarea
            className="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={updateDescription}
          />
        </label>
        <label>
          Image Url
          <input
            type="text"
            placeholder='Image Url'
            value={url}
            onChange={updateUrl}
          />
        </label>
        <label>
          Price
          <input
            type="text"
            placeholder="$/hour"
            value={price}
            onChange={updatePrice}
          />
        </label>
      <div className="createbuttons">
        <button  type="submit">Submit</button>
        <button  type="button" onClick={handleCancelClick}>Cancel</button>
      </div>
      </form>
    </body>
    </>
  );
}

export default CreateCourtPage;

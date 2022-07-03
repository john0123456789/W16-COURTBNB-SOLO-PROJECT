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

  let checkErrors = { name:'', url:'', description:'', address:'', city:'', state:'', country:'', price:'' };
  const [errors, setErrors] = useState(checkErrors);

  const updateUrl = (e) => setUrl(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = false;
    checkErrors = { ...checkErrors }

    if (name.length < 5) {
      checkErrors.name = "Court name must be at least 5 characters long."
      error = true;
    }
    else if (name === '') {
      checkErrors.name = "Court name cannot be empty."
      error = true;
    }
    if (!url.includes(".jpg") && !url.includes(".png") && !url.includes(".JPG") && !url.includes(".PNG") && !url.includes("image")) {
      checkErrors.url = "Url must be a jpg/png or contain image."
      error = true;
    }
    else if (url.length < 4) {
      checkErrors.url = "Url must be at least 4 characters."
      error = true;
    }
    if (description === '') {
      checkErrors.description = "Description cannot be empty."
      error = true;
    }
    else if (description.length < 25) {
      checkErrors.description = "Description must be at least 25 characters long."
      error = true;
    }
    else if (description.length > 100) {
      checkErrors.description = "We just want a description not your life story, keep it under 100 characters."
      error = true;
    }
    if (isNaN(price)) {
      checkErrors.price = "Please input only numbers."
      error = true;
    }
    else if (price === "") {
      checkErrors.price = "Price cannot be empty."
      error = true;
    }
    if (address.length < 4 || address.length > 40) {
      checkErrors.address = "Address must be between 4 and 40 characters."
      error = true;
    }
    if (city.length < 4 || city.length > 40) {
      checkErrors.city = "City must be between 4 and 40 characters."
      error = true;
    }
    if (state.length > 30) {
      checkErrors.state = "State must be under 30 characters."
      error = true;
    }
    setErrors(checkErrors);

    if (!error) {
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
    dispatch(thunkCreateCourt(court));
    history.push('/courts')
    };
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/courts')
  }

  return (
    <>
      <h1 className="addCourtTitle">Add Court</h1>
    <div className="courtBody">
      <div className="errorsList">
        <ul>{errors.name && <div>{errors.name}</div>}</ul>
        <ul>{errors.url && <div>{errors.url}</div>}</ul>
        <ul>{errors.description && <div>{errors.description}</div>}</ul>
        <ul>{errors.price && <div>{errors.price}</div>}</ul>
        <ul>{errors.address && <div>{errors.address}</div>}</ul>
        <ul>{errors.city && <div>{errors.city}</div>}</ul>
        <ul>{errors.state && <div>{errors.state}</div>}</ul>
      </div>
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
    </div>
    </>
  );
}


export default CreateCourtPage;

import { thunkGetCourts } from '../../store/courts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import './CourtsPage.css';

function CourtsPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);
    const courtsObj = useSelector(state => state.courts);
    const courtsArr = Object.values(courtsObj);

    useEffect (() => {
        dispatch(thunkGetCourts())
    }, [dispatch])

  if (sessionUser) {
    return (
        <>
        {courtsObj && courtsArr.map(court => {
            const handleEditClick = (e) => {
                e.preventDefault();
                history.push(`/court/${court.id}`)
              }
              const handleReviewClick = (e) => {
                e.preventDefault();
                const courtId = Number(e.target.id)
                history.push(`/reviews/court/${courtId}`)
              }
              const handleAddReviewClick = (e) => {
                e.preventDefault();
                const courtId = Number(e.target.id)
                history.push(`/reviews/create/${courtId}`)
              }

            return <ul className="courts" key={court.id}>
              <div className="courts-page">
                <ul><img src={court.url} className='court-img'/></ul>
                <ul className="courtName">{court.name}</ul>
                <ul className="courtDescription">Description: {court.description}</ul>
                <ul>Country: {court.country}</ul>
                <ul>Rate: ${court.price}.00/hour</ul>
                <button type='button' onClick={handleEditClick}>Edit</button>
                <button type='button' id={court.id} onClick={handleReviewClick}>Reviews</button>
                <button type='button' id={court.id} onClick={handleAddReviewClick}>Add Review</button>
              </div>
            </ul>
          })}
        </>
    );
} else {
    return (
        <>
        {courtsObj && courtsArr.map(court => {
            return <ul key={court.id}>
                <ul> <a href={court.url}><img src={court.url} className='court-img'/></a></ul>
                <li>{court.name}</li>
                <li>Description: {court.description}</li>
                <li>Country: {court.country}</li>
                <li>Rate: ${court.price}.00/hour</li>
            </ul>
          })}
        </>
    );
  }
}

export default CourtsPage;

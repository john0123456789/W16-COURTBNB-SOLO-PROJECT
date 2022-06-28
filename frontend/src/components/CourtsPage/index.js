import { thunkGetCourts } from '../../store/courts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
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
            return <ul key={court.id}>
                <li>{court.name}</li>
                <li>{court.description}</li>
                <li>${court.price}.00/hour</li>
                <button type='button' onClick={handleEditClick}>Edit</button>
            </ul>
          })}
        </>
    );
} else {
    return (
        <>
        {courtsObj && courtsArr.map(court => {
            return <ul key={court.id}>
                <li>{court.name}</li>
                <li>{court.description}</li>
                <li>${court.price}.00/hour</li>
            </ul>
          })}
        </>
    );
  }
}

export default CourtsPage;

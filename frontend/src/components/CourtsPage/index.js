import { thunkGetCourts } from '../../store/courts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
function CourtsPage() {
    const dispatch = useDispatch();

    const courtsObj = useSelector(state => state.courts);
    const courtsArr = Object.values(courtsObj);

    useEffect (() => {
        dispatch(thunkGetCourts())
    }, [dispatch])

    return (
        <>
        {courtsObj && courtsArr.map(court => {
            return <ul key={court.id}>
                <li>{court.name}</li>
                <li>{court.description}</li>
                <li>${court.price}.00/hour</li>
                <button>
                    <NavLink to={`/court/${court.id}`}>Edit</NavLink>
                </button>
            </ul>
          })}
        </>
    );
}

export default CourtsPage;

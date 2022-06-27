import { thunkGetCourts } from '../../store/courts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

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
            </ul>
          })}
        </>
    );
}

export default CourtsPage;

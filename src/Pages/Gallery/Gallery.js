import React, { useEffect } from 'react'
import { requestCars } from '../../Redux/Action'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Gallery.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Gallery = () => {

    const dispatch = useDispatch()
    const store = useSelector(state => state.cars)
    const loader = useSelector(state => state.loader)

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(requestCars())
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (

        <div className='row vh-100 d-flex justify-content-center text-center align-items-center '>
            {loader &&
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only "></span>
                </div>}
            {store.map((photo) =>
                <div class="col-lg-2 mx-2 d-flex justify-content-center">
                    <div class="overlay-item overlay-effect">
                        <img src={photo.thumbnailUrl} />
                        <div class="mask">
                            <h3>OVERLAY</h3>
                            <p className='text-center'>
                                {photo.title}
                            </p>
                            <Link to={`/${photo.id}`}>
                                <button href={photo.url} class="btn btn-dark">Подробнее</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>



    )

}


export default Gallery
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { requestPhotosId } from './../Redux/Action'

const More = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const store = useSelector(state => state.carsById)
    const loader = useSelector(state => state.loaderId)

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(requestPhotosId(id))
        }, 1000);
        return () => clearTimeout(timer);
    }, [id]);

    return (
        <div className='containerbyid vh-100 d-flex justify-content-center align-items-center '>
            {loader &&
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only "></span>
                </div>}
            {loader ||
                <div className='card mb-5' style={{ maxWidth: '500px' }}>
                    <img src={store.thumbnailUrl} />
                    <div class="card-body">
                        <h5 class="card-title">{store.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to={'/'}><button className='btn btn-dark'>Назад</button></Link>
                    </div>
                </div>
            }

        </div>
    )
}

export default More
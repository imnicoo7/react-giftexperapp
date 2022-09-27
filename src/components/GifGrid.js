import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

  return (
    <>
        {loading && <p className='animate__flash'>Loading...</p>}
        <h2 className='animate__backInUp'>{category}</h2>
        <div className='card-grid animate__backInUp'>
            {
                images.map(img =>(
                    <GifGridItem key={img.id} {... img}/>
                ))
            }
        </div>
    </>
  )
}

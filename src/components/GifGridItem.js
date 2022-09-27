import React from 'react'

function GifGridItem({id, title, url}) {
    console.log({id, title, url})
  return (
    
    <div className = "container card animate__heartBeat">
        <img  src={url} alt='Imagenes de Deku' />
        {/* <p className='animate__flash'>{title}</p> */}
    </div>
  )
}

export default GifGridItem
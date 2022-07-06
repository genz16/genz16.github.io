import React from 'react'
import Cards from './Cards'
import './MostPopular.css'

const MostPopular = () => {
  return (
    <>
     <section className='popular top py-3 ms-2'>
            <div className='full_container'>
                <div className='heading'>
                    <h2>Gallery</h2>
                    <div className='Line'></div>
                </div>
                <div className='content'>
                    <Cards/>
                </div>
            </div>
        </section>
    </>
  )
}

export default MostPopular
import React from 'react'
import { useRef } from 'react'

export const Checkout = () => {
  const datForm = useRef()

    const consultarForm = (e) => {

    }
    
    return (    
    <div className='container divForm'>
        <form onSubmit={consultarForm} ref={datForm}></form>
        <div className='mb-3'>
            <label htmlFor="" className='form-label'></label>

            <label type="text" className='form-control' name="" ></label>
            <label type="text" className='form-control' name="" ></label>
            <label type="text" className='form-control' name="" ></label>
            <label type="text" className='form-control' name="" ></label>
           
            <button type='submit' className='btn-primary'>Enviar</button>

        </div>

    </div>
  )
}

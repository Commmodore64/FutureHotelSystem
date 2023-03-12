import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig/Firebase';
import { Link } from 'react-router-dom';

const CreateRh = () => {
  const [ names, setNames ] = useState();
  const [ direcciones, setDirecciones ] = useState();
  const [ puestos, setPuestos ] = useState();
  const [ telefonos, setTelefonos ] = useState();
  const navigate = useNavigate()

  const productsCollection = collection(db, "empleados")

  const hotel = async (e) => {
    e.preventDefault()
    await addDoc ( productsCollection, { nombre: names, direccion: direcciones, puesto: puestos, telefono : telefonos } )
    navigate('/rh')
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Ingresar nuevos empleados</h1>

          <form onSubmit={ hotel }>
            <div className='mb-3'>
              <label className='form-label'>Nombre y apellido</label>
              <input 
                value={ names }
                onChange={ (e) => setNames(e.target.value)}
                type="text"
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Direccion</label>
              <input 
                value={ direcciones }
                onChange={ (e) => setDirecciones(e.target.value)}
                type="text"
                placeholder="Direccion"
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Puesto</label>
              <input 
                value={ puestos }
                onChange={ (e) => setPuestos(e.target.value)}
                type="text"
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Telefono</label>
              <input 
                value={ telefonos }
                onChange={ (e) => setTelefonos(e.target.value)}
                type="text"
                className='form-control'
              />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
            <Link to="/show" className='btn btn-secondary mt-2 mb-2'>Back</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateRh
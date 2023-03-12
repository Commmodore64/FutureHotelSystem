import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig/Firebase';
import { Link } from 'react-router-dom';

const Create = () => {
  const [ names, setNames ] = useState();
  const [ cursos, setCursos ] = useState();
  const [ salones, setSalones ] = useState();
  const navigate = useNavigate()

  const productsCollection = collection(db, "maestros")

  const escuela = async (e) => {
    e.preventDefault()
    await addDoc ( productsCollection, { nombre: names, curso: cursos, salon: salones } )
    navigate('/show')
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Ingresar nuevos huespedes</h1>

          <form onSubmit={ escuela }>
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
              <label className='form-label'>Tipo de habitacion</label>
              <input 
                value={ cursos }
                onChange={ (e) => setCursos(e.target.value)}
                type="text"
                placeholder="Familiar / Suite"
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Numero de huespedes</label>
              <input 
                value={ salones }
                onChange={ (e) => setSalones(e.target.value)}
                type="number"
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Fecha de entrada</label>
              <input 
                type="date"
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Fecha de salida</label>
              <input 
                type="date"
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Fecha de salida</label>
              <input 
                type="date"
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

export default Create
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig/Firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { NavLink } from "react-router-dom";

const MySwal = withReactContent(Swal);

const Show = () => {
    // 1.Configuramos los hooks
    const [empleados,setEmpleados] = useState( [] );

    // 2. Referenciamos la DB firestore
    const empleadosCollection = collection(db, "empleados");

    // 3. Funcion para mostrar todos los docs
    const getEmpleados = async () => {
        const data = await getDocs(empleadosCollection);
        //console.log(data.docs);
        setEmpleados (
          data.docs.map( (doc) => ( {...doc.data(), id:doc.id} ) )
        )
        //console.log(maestros);
    }

    // 4. Funcion para eliminar un doc
    const deleteEmpleados = async (id) => {
      const empleadosDoc = doc(db, "empleados", id)
      await deleteDoc(empleadosDoc)
      getEmpleados()
    }

    // 5. Funcion de configuracion para sweetalert2
    const confirmDelete = (id) => {
      MySwal.fire({
        title: '¿Eliminar Empleado?',
        text: "No podras revertir el cambio!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Si, borrar!'
      }).then((result) => {
        if (result.isConfirmed) { 
          //llamamos a la fcion para eliminar   
          deleteEmpleados(id)               
          Swal.fire(
            'Borrado!',
            'Su registro a sido eliminado',
            'success'
          )
        }
      })    
    }



    // 6. Usamos useEffect
    useEffect( () => {
        getEmpleados();
        // eslint-disable-next-line
    }, [] );

    // 7. Devolvemos vista de nuestro componente
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='d-grid gap-2'>
          <Link to="/createRh" className='btn btn-secondary mt-2 mb-2'>Empleado nuevo</Link>
          </div>

          <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Puesto</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Opciones</th>
              </tr>
            </thead>

            <tbody>
              { empleados.map( (empleados)  => (
                <tr key={empleados.id}>
                  <td>{ empleados.nombre }</td>
                  <td>{ empleados.puesto }</td>
                  <td>{ empleados.direccion } </td>
                  <td>{ empleados.telefono } </td>
                  <td>
                    <Link to={`/edit/${empleados.id}`} className='btn btn-light'><i className="fa-solid fa-pen-to-square"></i></Link>
                    <button onClick={ () => {confirmDelete(empleados.id)}} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              ))}
                

            </tbody>

          </table>
        </div>
      </div>
    </div>
    </> 
  )
}

export default Show;
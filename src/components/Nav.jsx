import React from 'react'
import img from '../img/logo.jpg'

const Nav = () => {
  return (
    <div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom'>
      <a className='d-flex align-items-center text-dark text-decoration-none' href="/">
        <img src={img} alt='img not fount' width="80px" className='me-2' />
      </a>
      <nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
        <a className="me-3 py-2 text-dark text-decoration-none" href="/create">Crear</a>
        <a className="me-3 py-2 text-dark text-decoration-none" href="/edit">Editar</a>
        <a className="me-3 py-2 text-dark text-decoration-none" href="/download">Descargar</a>
      </nav>
    </div>
  )
}

export default Nav

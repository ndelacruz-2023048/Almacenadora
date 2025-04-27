import React from 'react'
import { NavLink } from 'react-router'

export const SettingsTemplate = () => {
  return (
    <div>
        <NavLink to="/products/categories">
            <button>Categorias</button>
        </NavLink>
    </div>
  )
}

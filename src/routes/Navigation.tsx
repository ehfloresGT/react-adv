import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

import { showActive } from '../helpers/showActive';
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/home" className={ showActive }>Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ showActive }>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ showActive }>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="home" element={<ShoppingPage />} />
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

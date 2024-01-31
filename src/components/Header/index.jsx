import React from 'react'
import Styles from './index.module.less'

function Header() {
  return (
    <div className={Styles.header}>
      <h1>Search for user information based on the user's name</h1>
      <div className={Styles.search}>
        <input type='text' />
        <button>Search</button>
      </div>
    </div>
  )
}

export default Header
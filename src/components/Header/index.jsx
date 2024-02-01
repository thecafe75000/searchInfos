import React, { useEffect, useState } from 'react'
import Styles from './index.module.less'

function Header(props) {
  const { getUserList} = props
  const [searchKey, setSearchKey] = useState("")

  const changeInput = (e) => {
    setSearchKey(e.target.value)
  }

  
  return (
    <div className={Styles.header}>
      <h1>Search for user information based on the user's name</h1>
      <div className={Styles.search}>
        <input type='text' value={ searchKey } onChange={changeInput} />
        <button onClick={() => { getUserList(searchKey) }}>Search</button>
      </div>
    </div>
  )
}

export default Header


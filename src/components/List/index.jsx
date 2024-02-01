import React from 'react'
import Styles from './index.module.less'

function List(props) {
  const {userList, isSearch, searching} = props
  return (
    <div>
      <ul className={Styles.outer}>
        {
          isSearch ?
          searching ? "Get started to search" : userList.map(item => {
                return (
                  <li key={item.id}>
                    <img
                      src={item.avatar_url}
                      alt=''
                    />
                    <p>{ item.login }</p>
                  </li>
                )
              }) : "You can click the search button to initiate a search"
        }
        
      </ul>
    </div>
  )
}

export default List
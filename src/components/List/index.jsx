import React from 'react'
import Styles from './index.module.less'

function List(props) {
  const { userList, isSearch, searching, isError, errorMsg } = props
  
  return (
    <div>
      <ul className={Styles.outer}>
        {
          isSearch ?
            searching ? 'You get started searching' :
             isError? errorMsg :
              userList.map(item => {
                return (
                  <li key={item.id}>
                    <img src={item.avatar_url} alt='' />
                    <p>{item.login}</p>
                    <p>{item.html_url}</p>
                  </li>
                )
              }) : "You can click the search button to initiate a search"
        }
        
      </ul>
    </div>
  )
}

export default List


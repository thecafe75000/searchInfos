import React from 'react'
import Styles from './index.module.less'

function List(props) {
  const {userList} = props
  return (
    <div>
      <ul className={Styles.outer}>
        {
          userList.map(item => {
            return (
              <li key={item.id}>
                <img
                  src={item.avatar_url}
                  alt=''
                />
                <p>{ item.login }</p>
              </li>
            )
          })
        }
        
      </ul>
    </div>
  )
}

export default List
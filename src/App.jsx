import { useState } from 'react'
import Header from '@/components/Header'
import List from '@/components/List'
import './App.less'
import { reqGithubUserList } from './api'

function App() {
  //? This is the data of user list
  const [userList, setUserList] = useState([])

  //? This is the data indicating if the user has started a search
  const [isSearch, setIsSearch] = useState(false)

  //? The data indicating if a search is currently in progress
  const [searching, setSearching] = useState(false)

  //? Encapsulate a function in the App for data retrieval,
  //? then pass the function to the Header component, allowing the Header component to invoke the function at any time
  const getUserList = async (searchKey) => {
    //? Check if the input content is empty,if it is, the code execution will not proceed further
    if (!searchKey.trim()) {
      return alert('The input content cannot be empty')
    }

    setIsSearch(true)
    setSearching(true)

    //? Send a http request
    const result = await reqGithubUserList(searchKey)
    setUserList(result.items)

    //? At this point, the search is completed, and the 'searching' status is set to false
    setSearching(false)
  }

  return (
    <div style={{ width: '808px', margin: '0 auto' }}>
      <Header getUserList={getUserList} />
      <List userList={userList} isSearch={isSearch} searching={ searching} />
    </div>
  )
}

export default App

import { useState } from 'react'
import Header from '@/components/Header'
import List from '@/components/List'
import './App.less'
import { reqGithubUserList } from './api'

function App() {
  const [userList, setUserList] = useState([])

  //? Encapsulate a function in the App for data retrieval, 
  //? then pass the function to the Header component, allowing the Header component to invoke the function at any time
  const getUserList = async (searchKey) => {
    //? Check if the input content is empty,if it is, the code execution will not proceed further
    if (!searchKey.trim()) {
      return alert('The input content cannot be empty')
    }

    //? Send a http request
    const result = await reqGithubUserList(searchKey)
    setUserList(result.items)
  }

  return (
    <div style={{ width: '808px', margin: '0 auto' }}>
      <Header getUserList={getUserList} />
      <List userList={userList} />
    </div>
  )
}

export default App

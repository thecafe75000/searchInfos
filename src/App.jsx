import { useEffect } from 'react'
import Header from '@/components/Header'
import List from '@/components/List'
import './App.less'
import { reqGithubUserList } from './api'

function App() {
  useEffect(() => {
    const result = reqGithubUserList("coderwhy")
    console.log(result)
  }, [])
  
  return (
    <div style={{ width: '808px', margin: '0 auto' }}>
      <Header />
      <List />
    </div>
  )
}

export default App

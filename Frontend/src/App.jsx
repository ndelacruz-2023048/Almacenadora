import { useState } from 'react'
import MyRoutes from './routers/routes'
import { GlobalStyles } from './style/GlobalStyle'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles/>
      <MyRoutes/>
    </>
  )
}

export default App

import { useState } from 'react'
import MyRoutes from './routers/routes'
import { GlobalStyles } from './style/GlobalStyle'
import { Toaster } from "react-hot-toast"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles/>
      <MyRoutes/>
      <Toaster position="bottom-right" reverseOrder={false}/>
    </>
  )
}

export default App

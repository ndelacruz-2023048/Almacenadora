import MyRoutes from './routers/routes'
import { GlobalStyles } from './style/GlobalStyle'
import { Toaster } from "react-hot-toast"
import { AuthContextProvider } from "./context/AuthContext"


function App() {

  return (
    <>
      <AuthContextProvider>
        <GlobalStyles/>
        <MyRoutes/>
        <Toaster position="bottom-right" reverseOrder={false}/>
      </AuthContextProvider>
    </>
  )
}

export default App

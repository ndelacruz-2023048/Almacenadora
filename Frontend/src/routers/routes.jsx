import {createBrowserRouter, RouterProvider} from 'react-router'
import { HomePage } from '../pages/HomePage'
import { Layout } from '../hooks/layout'
import { ProductManagerPage } from '../pages/ProductManagerPage'
import { ClientPage } from '../pages/ClientPage'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout>
            <HomePage/>
        </Layout>,
        errorElement:<div>Que tal don pinguino, andamos trabajando arduamente para darme un mejor experiencia att.Mac'pa pa ra papa'</div>
    },
    {
        path:'/clients',
        element:<Layout>
            <ClientPage/>
        </Layout>
    },
    {
        path:'/products',
        element:<Layout>
            <ProductManagerPage/>
        </Layout>
    }
])

const MyRoutes = ()=><RouterProvider router={router}/>

export default MyRoutes
import {createBrowserRouter, RouterProvider} from 'react-router'
import { HomePage } from '../pages/HomePage'
import { Layout } from '../hooks/layout'
import { ProductManagerPage } from '../pages/ProductManagerPage'
import { ClientPage } from '../pages/ClientPage'
import { ProductCategoriesPage } from '../pages/ProductCategoriesPage'
import { SettingsPage } from '../pages/SettingsPage'

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
        path:'/setting',
        element:<Layout>
            <SettingsPage/>
        </Layout>
    },
    {
        path:'/products',
        element:<Layout>
            <ProductManagerPage/>
        </Layout>
    },
    {
        path:"/products/categories",
        element:<Layout>
            <ProductCategoriesPage/>
        </Layout> 
    }
])

const MyRoutes = ()=><RouterProvider router={router}/>

export default MyRoutes
import {createBrowserRouter, RouterProvider} from 'react-router'
import { HomePage } from '../pages/HomePage'
import { Layout } from '../hooks/layout'
import { ProductManagerPage } from '../pages/ProductManagerPage'
import { ClientPage } from '../pages/ClientPage'
import { ProductCategoriesPage } from '../pages/ProductCategoriesPage'
import { SettingsPage } from '../pages/SettingsPage'
import { ProviderPage } from '../pages/ProviderPage'
import { LoginPage } from '../pages/LoginPage'
import { ProtectedRoutes } from "../hooks/ProtectedRoutes"
import { Register } from '../pages/RegisterPage'

const router = createBrowserRouter([
    {
        path:'/',
        element:(
            <ProtectedRoutes accesBy="authenticated">
                <Layout>
                    <HomePage/>
                </Layout>
            </ProtectedRoutes>
        )
    },
    {
        path: '/login',
        element: (
            <ProtectedRoutes accesBy="non-authenticated">
                <LoginPage/>
            </ProtectedRoutes>
        )
    },{
        path: '/register',
        element: (
            <ProtectedRoutes accesBy="non-authenticated">
                <Register/>
            </ProtectedRoutes>
        )
    },
    {
        path:'/clients',
        element:(
            <ProtectedRoutes accesBy="authenticated">
                <Layout>
                    <ClientPage/>
                </Layout>
            </ProtectedRoutes>
        )
    },
    {
        path:'/setting',
        element:(
            <ProtectedRoutes accesBy="authenticated">
                <Layout>
                    <SettingsPage/>
                </Layout>
            </ProtectedRoutes>
        )
    },
    {
        path:'/products',
        element:(
            <ProtectedRoutes accesBy="authenticated">
                <Layout>
                    <ProductManagerPage/>
                </Layout>
            </ProtectedRoutes>
        )
    },
    {
        path:'/provider',
        element:(
            <ProtectedRoutes accesBy="authenticated">
                <Layout>
                    <ProviderPage/>
                </Layout>
            </ProtectedRoutes>
        )
    },
    {
        path:"/products/categories",
        element:(
            <ProtectedRoutes accesBy="authenticated">
                <Layout>
                    <ProductCategoriesPage/>
                </Layout>
            </ProtectedRoutes>
        ) 
    }
])

const MyRoutes = ()=><RouterProvider router={router}/>

export default MyRoutes
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React from 'react'
import Login from './Login'
import Browse from './Browse'

export default function Body() {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

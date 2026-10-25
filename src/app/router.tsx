import { createBrowserRouter } from 'react-router'
import RootLayout from '@/layouts/RootLayout'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: 'posts',
        lazy: async () => ({
          Component: (await import('@/features/posts/Posts')).default,
        }),
      },
      {
        path: 'posts/:id',
        lazy: async () => ({
          Component: (await import('@/features/posts/PostDetail')).default,
        }),
      },
      { path: '*', Component: NotFound },
    ],
  },
])

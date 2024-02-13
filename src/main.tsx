import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ClerkProvider
            publishableKey={
                import.meta.env.VITE_NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string
            }
        >
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                <App />
            </ConvexProviderWithClerk>
        </ClerkProvider>
    </React.StrictMode>
)

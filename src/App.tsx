import './App.css'
import { useQuery } from 'convex/react'
import { api } from '../convex/_generated/api'
import { SignInButton } from '@clerk/clerk-react'
import { SignOutButton } from '@clerk/clerk-react'
import { useConvexAuth } from 'convex/react'

function App() {
    const tasks = useQuery(api.tasks.get)
    const { isLoading, isAuthenticated } = useConvexAuth()

    return (
        <div className="App">
            {isAuthenticated ? (
                <SignOutButton />
            ) : (
                <SignInButton mode="modal" />
            )}
            {tasks?.map(({ _id, text }) => (
                <div key={_id}>{text}</div>
            ))}
        </div>
    )
}

export default App

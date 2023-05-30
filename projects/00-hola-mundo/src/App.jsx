import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true
        },
        {
            userName: 'reddit.com', 
            name: 'reddit',
            isFollowing: false
        }
    ]

    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName} 
                            name={name} 
                            initialIsFollowing={isFollowing}
                        />
                    )
                })
            }
        </section>
    )
}

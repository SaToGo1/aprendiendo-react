import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    return (
        <section className='App'>
            <TwitterFollowCard 
                userName='reddit.com' 
                name='reddit' 
                initialIsFollowing={false}
            />

            <TwitterFollowCard 
                userName='midudev' 
                name='Miguel Ángel Durán'
                initialIsFollowing
            />

        </section>
    )
}

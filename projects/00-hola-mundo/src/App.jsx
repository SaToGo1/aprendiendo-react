import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatUserName = (userName) => `@${userName}`;

    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName='reddit.com' name='reddit' />
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName='midudev' name='Miguel Ángel Durán' />
        </section>
    )
}

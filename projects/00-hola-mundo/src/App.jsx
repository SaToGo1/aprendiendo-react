import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
    return (
        <div className='App'>
            <TwitterFollowCard userName='reddit.com' name='reddit' />
            <TwitterFollowCard userName='midudev' name='Miguel Ángel Durán' />
        </div>
    )
}

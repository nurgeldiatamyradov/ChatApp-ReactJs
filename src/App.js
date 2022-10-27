import { ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import  ChatFeed  from './components/ChatFeed';
import './App.css'


const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
         height ="100vh"
         projectID="13eec259-1bf0-4e17-ab21-7bb2f64fbeae"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />

        
    )
}

export default App;
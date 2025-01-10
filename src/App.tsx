import './App.css'
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { MyStack } from './layout/sections/myStack/MyStack';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MyStack/>
        </div>
    )
}

export default App

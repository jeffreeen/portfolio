import './App.css'
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { MyProjects } from './layout/sections/myProjects/MyProjects';
import { MyStacks } from './layout/sections/myStacks/MyStacks';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MyStacks/>
            <MyProjects/>
        </div>
    )
}

export default App


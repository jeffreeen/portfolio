import './App.css'
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { MyProjects } from './layout/sections/myProjects/MyProjects';
import { MyStacks } from './layout/sections/myStacks/MyStacks';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MyStacks/>
            <MyProjects/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App


import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Works } from './layout/section/works/Works';
import { Testimony } from './layout/section/testimony/Testimony';
import { Contact } from './layout/section/contacts/Contacts';
import { Slogan } from './layout/section/sloagan/Slogan';
import { Footer } from './layout/Footer/Footer';
import { Particle } from './components/particle/Particle';


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header />
            <Main />
            <Skills/>
            <Works />
            <Testimony />
            <Contact />
            <Slogan />
            <Footer />
        </div>
    );
}

export default App;
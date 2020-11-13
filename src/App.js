import React, {useState} from 'react';
import Header from './components/Header';
import Nav from './components/Navigation';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';



function App() {
  const frontEnd = [
    {
      id: 1,
      name: 'Javascript'
    },
    {
      id: 2,
      name: 'HTML5'
    },
    {
      id: 3,
      name: 'CSS3'
    },
    {
      id: 4,
      name: 'Git'
    },
    {
      id: 5,
      name: 'React'
    },
    {
      id: 6,
      name: 'BootStrap'
    }
  ];
  const backEnd = [
    {
      id: 1,
      name: 'MySQL'
    },
    {
      id: 2,
      name: 'MongoDB'
    },
    {
      id: 3,
      name: 'Express'
    },
    {
      id: 4,
      name: 'Node'
    },
    {
      id: 5,
      name: 'npm'
    },
    {
      id: 6,
      name: 'APIs'
    }
  ];

  const [state, setState] = useState({
    currentScreen: 'about me'
  });

  const handleLinkClick = (newScreen) => {
    setState({...state, currentScreen: newScreen})
  }

  var screenToDisplay;

  if(state.currentScreen === 'portfolio') {
    screenToDisplay = (<Project></Project>)
  } else if ( state.currentScreen === 'about me') {
    screenToDisplay = (<About></About>)
  } else if ( state.currentScreen === 'contact') {
    screenToDisplay = (<ContactForm></ContactForm>)
  } else if ( state.currentScreen === 'resume') {
    screenToDisplay = (<Resume frontEnd={frontEnd} backEnd={backEnd}></Resume>)
  }

  return (
    <div>
      <header>
        <Header></Header>
        <Nav handleClick={handleLinkClick} currentScreen={state.currentScreen}></Nav>
      </header>
      <main>
        {screenToDisplay}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
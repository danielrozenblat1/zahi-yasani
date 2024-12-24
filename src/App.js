import logo from './logo.svg';
import './App.css';
import ThirdScreen from './screens/ThirdScreen';
import Courses from './components/sadnaot/Sadnaot';
import FirstScreen from './screens/FirstScreen';
import AboutMe from './components/me/Me';
import ByMe from './components/ByMe/ByMe';
import NavBarNew from './components/NewNav/NavBarNew';
import { useEffect, useState } from 'react';
import Services from './components/recommends/Services';
import SecondScreen from './screens/SecondScreen';

function App() {

    
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  <FirstScreen scrolled={scrolled}/>
  <AboutMe/>
  <SecondScreen/>
  <Courses/>
  <Services/>
  <ThirdScreen/>
  <ByMe/>
  </>
}

export default App;

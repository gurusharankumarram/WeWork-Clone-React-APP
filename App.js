// import logo from './logo.svg';
// import './App.css';
// import TopAlert from './components/TopAlert';
// import Navbar from './components/Navbar';
// import Slider from './components/Slider';
// import SliderForm from './components/SliderForm';
// import Workspace from './components/Workspace';
// import Content1 from './components/Content1';
// import Content2 from './components/Content2';
// import Content3 from './components/Content3';
// import Content4 from './components/Content4';
// import Component5Empowering from './components/Component5Empowering';
// import Component6Ideas from './components/Component6Ideas';
// import Component7Blog from './components/Component7Blog';
// import Component8Footer from './components/Component8Footer';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Login from './JsonData/Login';
import Admin from './JsonData/Admin';
import TopAlertView from './JsonData/TopAlertView';
import TopAlertEdit from './JsonData/TopAlertEdit';

function App() {
  return (
    <>
      {/* <TopAlert />
    <Navbar />
    <Slider />
    <SliderForm />
    <Workspace />
    <Content1 />
    <Content2 />
    <Content3 />
    <Content4 />
    <Component5Empowering />
    <Component6Ideas />
    <Component7Blog />
    <Component8Footer /> */}


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/admin" element={<Admin />}> </Route>

          <Route path="/topalertview" element={<TopAlertView />}> </Route>
          <Route path="/topalertedit" element={<TopAlertEdit />}> </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

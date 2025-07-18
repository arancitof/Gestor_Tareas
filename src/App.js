import logo from './logo.svg';
import './App.css';
import Gretting from './components/pure/gretting';
import GrettingF from './components/pure/grettingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MicomponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GrettingStyled from './components/pure/grettingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';
import FetchExample from './components/pure/FetchExample';
import AxiosExample from './components/pure/AxiosExample';

function App() {
  return (
    <div className="App">
      {/*       <header className="App-header"> */}
      {/*         <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Componente Gretting */}
      {/*         <Gretting name='Alan'></Gretting> */}
      {/* <GrettingF name='Alan'></GrettingF> */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MicomponenteConContexto></MicomponenteConContexto> */}
      {/*  <Ejemplo4 nombre='Alan'> */}
      {/* Todo lo que hay aqui dentro es tratado como props.children */}
      {/*         <h3>
            Contenido del Children
          </h3>
        </Ejemplo4> */}
      {/*       </header> */}
      {/* 
      <GrettingStyled name='Alan'></GrettingStyled> */}
{/*       <TaskListComponent></TaskListComponent>
      <RegisterFormik></RegisterFormik> */}
      {/* Ejemplos de renderizados condicionales */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Gestion de eventos */}
      {/*       <Father> </Father> */}
      {/*       <LoginFormik></LoginFormik> */}


      {/* Ejemplos de procesos asíncronos */}
      {/* <AsyncExample></AsyncExample> */}
      {/* <ObservableExample></ObservableExample> */}
    {/*   <FetchExample></FetchExample> */}
    <AxiosExample></AxiosExample>
    </div>
  );
}

export default App;

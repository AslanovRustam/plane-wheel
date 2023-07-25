import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import button from "./images/button.png";
import s from "./components/Main/main.module.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <img className={s.button} src={button} alt="button" />
    </>
  );
}

export default App;

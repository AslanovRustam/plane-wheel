import logo from "../../images/logo.png";
import s from "./header.module.css";

export default function Header() {
  return (
    <header>
      <img className={s.logo} src={logo} alt="logo twin" />
    </header>
  );
}

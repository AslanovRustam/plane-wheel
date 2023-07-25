import Wheel from "../Wheel/Wheel";
import plane from "../../images/plane.png";
import button from "../../images/button.png";
import s from "./main.module.css";

export default function Main() {
  return (
    <section className={s.section}>
      <img className={s.person} src={plane} alt="plane" />
      {/* <img className={s.button} src={button} alt="button" /> */}
      <Wheel />
    </section>
  );
}

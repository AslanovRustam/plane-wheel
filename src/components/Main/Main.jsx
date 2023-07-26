import Wheel from "../Wheel/Wheel";
import plane from "../../images/plane.png";
import s from "./main.module.css";

export default function Main() {
  return (
    <section className={s.section}>
      <div className={s.person}>
        <img className={s.plane} src={plane} alt="plane" />
      </div>
      <Wheel />
    </section>
  );
}

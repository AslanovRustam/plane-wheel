import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import s from "./wheel.module.css";
import wheel from "../../images/wheel.png";
import arrow from "../../images/arrow.png";
import btnSpine from "../../images/btnSpine.png";
import button from "../../images/button.png";

export default function Wheel() {
  const [count, setCount] = useState(2);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (count === 1) {
      setTimeout(() => togleModal(), 5000);
    }
    if (count === 0) {
      setTimeout(() => togleModal(), 7000);
    }
  }, [count]);
  function togleModal() {
    return setShowModal(!showModal);
  }
  return (
    <>
      <div className={s.section}>
        <div className={s.container}>
          <img className={s.arrow} src={arrow} alt="arrow" />
          <img
            className={s.btnSpine}
            src={btnSpine}
            alt="button to spin"
            onClick={() => setCount(count - 1)}
          />
          <img
            className={`${s.wheel}   ${count === 1 && s.wheel_1_spin}
          ${count === 0 && s.wheel_2_spin}`}
            src={wheel}
            alt="wheel"
          />
        </div>
        <div className={s.btnContainer}>
          <img
            className={s.button}
            src={button}
            alt="button"
            onClick={() => setCount(count - 1)}
          />
        </div>
      </div>
      <Modal
        onClose={togleModal}
        count={count}
        setCount={setCount}
        showModal={showModal}
      />
    </>
  );
}

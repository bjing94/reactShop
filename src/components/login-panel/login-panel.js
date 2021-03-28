import React, { useState } from "react";
import { AwesomeButton } from "../buttons";

import "./login-panel.css";

const LoginPanel = (props) => {
  const { active } = props;
  const activeClass = active ? null : " hidden";
  const [loginActive, setloginActive] = useState(true);

  const content = loginActive ? (
    <div className="login-panel-body">
      <input className="login-input" placeholder={"example@gmail.com"} />
      <input className="login-input" placeholder={"сложный пароль"} />
      <AwesomeButton width={120} height={25} bStyle="action">
        Войти
      </AwesomeButton>
    </div>
  ) : (
    <div className="login-panel-body">
      <input className="login-input" placeholder={"example@gmail.com"} />
      <input className="login-input" placeholder={"сложный пароль"} />
      <input className="login-input" placeholder={"повторите его"} />
      <AwesomeButton width={200} height={25} bStyle="action">
        Зарегистрироваться
      </AwesomeButton>
    </div>
  );
  return (
    <div className={`login-panel-container ${activeClass}`}>
      <div className="login-panel-head">
        <AwesomeButton
          width={120}
          height={25}
          bStyle="action"
          active={loginActive}
          onClick={() => {
            setloginActive(true);
          }}
        >
          Вход
        </AwesomeButton>
        <AwesomeButton
          width={120}
          height={25}
          bStyle="action"
          active={!loginActive}
          onClick={() => {
            setloginActive(false);
          }}
        >
          Регистрация
        </AwesomeButton>
      </div>
      {content}
    </div>
  );
};

export default LoginPanel;

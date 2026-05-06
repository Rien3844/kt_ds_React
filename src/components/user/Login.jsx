/** @format */

import { useRef, useState } from "react";
import { isString } from "../../utils/type";
import { getValidationResult } from "../../utils/errorHandler";
import { fetchLogin } from "../../http/articles/fetchLogin";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../stores/toolkit/slices/userSlice";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { token } = useSelector((store) => store.user);
  const toolkitProvider = useDispatch();
  const [loginErrors, setLoginErrors] = useState();

  if (token) {
    return <></>;
  }

  const onLoginButtonClickHandler = async () => {
    const loginResult = await fetchLogin(
      emailRef.current.value,
      passwordRef.current.value,
    );
    toolkitProvider(userAction.login(loginResult.token));

    if (loginResult.error) {
      if (isString(loginResult.error)) {
        setLoginErrors(loginResult.error);
      } else {
        setLoginErrors(getValidationResult(loginResult.error));
      }
    }
  };

  return (
    <div>
      {isString(loginErrors) && <div>{loginErrors}</div>}

      <div>
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" ref={emailRef} />
        {loginErrors?.email && <div>{loginErrors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">PWD</label>
        <input type="password" id="password" ref={passwordRef} />
        {loginErrors?.password && <div>{loginErrors.password}</div>}
      </div>
      <button type="button" onClick={onLoginButtonClickHandler}>
        로그인
      </button>
    </div>
  );
};
export default Login;

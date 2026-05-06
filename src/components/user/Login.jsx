/** @format */

import { useEffect, useRef, useState } from "react";
import { isString } from "../../utils/type";
import { getValidationResult } from "../../utils/errorHandler";
import { fetchLogin, fetchMyInfo } from "../../http/articles/fetchLogin";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../stores/toolkit/slices/userSlice";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { token, info } = useSelector((store) => store.user);

  const toolkitProvider = useDispatch();

  const [loginErrors, setLoginErrors] = useState();

  useEffect(() => {
    toolkitProvider(userAction.autoLogin());
    const loadMyInfo = async () => {
      // /api/member/me 호출

      const sessionToken = sessionStorage.getItem("token");
      const myInfo = await fetchMyInfo(sessionToken);

      if (myInfo.error) {
        console.log(myInfo);
        console.log(myInfo.error);
        // alert(myInfo.error);
      } else {
        toolkitProvider(userAction.loadMyInfo(myInfo));
      }
    };
    loadMyInfo();
  }, [token]);

  // token이 있을 때만 수행.
  if (token) {
    const onLogoutButtonClickHandler = () => {
      // token이 변조되었거나 만료기간이 도래한 경우.
      sessionStorage.removeItem("token");
      // slice store도 제거.
      toolkitProvider(userAction.logout());
    };
    return (
      <div>
        {info?.name} ({info?.email})
        <button onClick={onLogoutButtonClickHandler}>Logout</button>
      </div>
    );
  }

  const onLoginButtonClickHandler = async () => {
    const loginResult = await fetchLogin(
      emailRef.current.value,
      passwordRef.current.value,
    );
    if (!loginResult.error) {
      // 로그인 상태를 기억하기 위해서 브라우저의 storage에 등록.
      sessionStorage.setItem("token", loginResult.token);
      toolkitProvider(userAction.login(loginResult.token));
    }

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

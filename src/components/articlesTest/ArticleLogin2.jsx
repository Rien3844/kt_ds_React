import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../http/articles/fetchLogin.js";
import { articleAction } from "../../stores/toolkit/slices/articleSlice.js";
import { getValidationResult } from "../../utils/errorHandler.js";
import { isString } from "../../utils/type.js";

const ArticleLogin = () => {
  const reactReduxDispatcher = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { token, loginErrors } = useSelector((store) => store.article);

  const onLoginButtonClickHandler = async () => {
    const loginResult = await fetchLogin(
      emailRef.current.value,
      passwordRef.current.value,
    );
    if (loginResult.token) {
      reactReduxDispatcher(
        articleAction.loginSuccess({ token: loginResult.token }),
      );
    } else {
      const errorMsg = isString(loginResult.error)
        ? loginResult.error
        : getValidationResult(loginResult.error);
      reactReduxDispatcher(articleAction.loginFailure(errorMsg));
    }
  };

  if (token) {
    return null;
  }
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

export default ArticleLogin;

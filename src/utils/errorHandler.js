import { isArray, isObject } from "./type";

/**
 * {
 *     "error": [
 *       {
 *          "field": "password"
 *          "defaultMessage": "비밀번호를 입력해주세요."
 *       },
 *      {
 *          "field": "email"
 *          "defaultMessage": "email을 입력해주세요."
 *       }
 *   ],
 *   "status": 400,
 * }
 */
export const getValidationResult = (error) => {
  if (isArray(error)) {
    const message = {};

    for (let eachError of error) {
      if (isObject(eachError)) {
        if (eachError.field && eachError.defaultMessage) {
          // { email : "email을 입력해주세요.", password : "비밀번호를 입력해주세요." }
          message[eachError.field] = eachError.defaultMessage;
        } else {
          return undefined;
        }
      }
      //객체가 아니면
      else {
        return undefined;
      }
    }
    return message;
  }
};

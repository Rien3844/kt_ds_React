// parameter값이 전달되지 않으면 = 0 ==> 0을 넣어라. = 10 ==> 10을 넣어라.
export const fetchArticleList = async (pageNo = 0, listSize = 10) => {
  try {
    const fetchResult = await fetch(
      `http://192.168.211.20:8080/api/articles?pageNo=${pageNo}&listSize=${listSize}`,
    );

    const listResult = await fetchResult.json();
    return listResult;
  } catch (e) {
    return {
      result: { count: 0, result: [] },
      pagination: {},
      errors: "서비스가 잠시 중단되었습니다. 잠시 후 다시 시도해주세요.",
    };
  }
};

// JWT 인증 정보를 받아올 함수 /api/authorization
export const fetchJsonWebToken = async (id, password) => {
  try {
    const fetchResult = await fetch("api/authorization");
    const loginResult = await fetchResult.json();

    return loginResult;
  } catch (e) {
    return {
      token: {},
      errors: "로그인 정보가 잘못되었습니다.",
    };
  }
};

// 인증 정보 필요.
export const fetchAddArticle = () => {};

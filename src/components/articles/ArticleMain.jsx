/*
import { useState } from "react";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import articleData from "./articles.json";
import ArticleWriter from "./ArticleWriter.jsx";

const ArticleMain = () => {
  const [cachedData, setCachedData] = useState(articleData.articles);
  const [newData, setNewData] = useState({
    subject: "",
    name: "",
    email: "",
    content: "",
  });
  const { subject, name, email, content } = newData;

  const onSubjectChangeHandler = (event) => {
    setNewData((prevData) => ({
      ...prevData,
      subject: event.target.value,
    }));
  };
  const onNameChangeHandler = (event) => {
    setNewData((prevData) => ({
      ...prevData,
      name: event.target.value,
    }));
  };
  const onEmailChangeHandler = (event) => {
    setNewData((prevData) => ({
      ...prevData,
      email: event.target.value,
    }));
  };
  const onContentChangeHandler = (event) => {
    setNewData((prevData) => ({
      ...prevData,
      content: event.target.value,
    }));
  };

  const onSaveButtonClickHandler = () => {
    console.log("저장");
    const randomViewCount = Math.floor(Math.random() * 1000) + 1;
    const now = new Date();
    setCachedData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        subject,
        name,
        email,
        content,
        viewCnt: randomViewCount,
        crtDt: now,
      },
    ]);
    setNewData({ subject: "", name: "", email: "", content: "" });
  };

  console.log(articleData);
  return (
    <div className="wrapper">
      <h1>게시글 목록</h1>
      <div>총 n개의 게시글이 검색되었습니다.</div>
      <table>
        <ArticleHeader />
        <ArticleList articles={cachedData} />
      </table>
      <ArticleWriter
        inputData={newData}
        onSaveButtonClick={onSaveButtonClickHandler}
        onSubjectChange={onSubjectChangeHandler}
        onNameChange={onNameChangeHandler}
        onEmailChange={onEmailChangeHandler}
        onContentChange={onContentChangeHandler}
      />
    </div>
  );
};
export default ArticleMain;*/

/** @format */

// articles.json 파일 불러오기
import { useState } from "react";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import articleData from "./articles.json";
import ArticleWriter from "./ArticleWriter.jsx";

const ArticleMain = () => {
  console.log(articleData);

  const [articles, setArticles] = useState(articleData.articles);
  // 글쓰기 화면을 보여줄 State 생성
  const [showWrite, setShowWrite] = useState(false);

  const [
    {
      subject,
      content,
      membersVO: { email, name },
    },
    setInputData,
  ] = useState({
    subject: "",
    content: "",
    membersVO: { email: "", name: "" },
  });

  const onSubjectChangeHandler = (event) => {
    // 이전 값을 유지하고, event 받은 값을 넣겠다.
    setInputData((prevData) => ({ ...prevData, subject: event.target.value }));
  };
  const onContentChangeHandler = (event) => {
    setInputData((prevData) => ({ ...prevData, content: event.target.value }));
  };
  const onEmailChangeHandler = (event) => {
    setInputData((prevData) => ({
      // 기존 값을 유지하고,
      ...prevData,
      //prevData의 membersVO의 값을 구조분해해서 email에 event로 받은 값을 넣어라.
      membersVO: { ...prevData.membersVO, email: event.target.value },
    }));
  };
  const onNameChangeHandler = (event) => {
    setInputData((prevData) => ({
      ...prevData,
      membersVO: { ...prevData.membersVO, name: event.target.value },
    }));
  };

  // 사용자의 입력값을 초기화하는 함수 == 취소버튼
  const onResetClickHandler = () => {
    setInputData({
      subject: "",
      content: "",
      membersVO: { email: "", name: "" },
    });
    // 기존 ResetHandler에 취소 버튼을 누를 시 글쓰기 Form이 닫힐 수 있게 showWrite값 변경
    setShowWrite(false);
  };

  const onAddArticleClickHandler = () => {
    const lpad = (str, length, defaultCharacter) => {
      const remainLength = length - (str + "").length;
      return defaultCharacter.repeat(remainLength) + str;
    };

    const getDateTime = (format) => {
      const now = new Date();

      return format
        .replaceAll("YYYY", now.getFullYear())
        .replaceAll("MM", lpad(now.getMonth() + 1, 2, "0"))
        .replaceAll("DD", lpad(now.getDate(), 2, "0"))
        .replaceAll("HH", lpad(now.getHours(), 2, "0"))
        .replaceAll("mm", lpad(now.getMinutes(), 2, "0"))
        .replaceAll("ss", lpad(now.getSeconds(), 2, "0"));
    };

    const makeId = (index) => {
      const seq = lpad(index, 6, "0");
      return `BO-${getDateTime("YYYYMMDD-")}${seq}`;
    };

    // 기존 데이터(prevData)를 유지하고, 뒤에 이 객체{}를 set(넣어라)해라.
    setArticles((prevData) => [
      ...prevData,
      {
        id: makeId(prevData.length + 1),
        subject,
        content,
        email,
        viewCnt: parseInt(Math.random() * 10000),
        crtDt: getDateTime("YYYY-MM-DD HH:mm:ss"),
        mdfyDt: null,
        fileGroupId: null,
        membersVO: { email, name },
        files: [],
      },
    ]);

    onResetClickHandler();
  };

  const onShowWriteFormHandler = () => {
    setShowWrite(true);
  };

  return (
    <div className="wrapper">
      <div>{articles.length}개의 게시글이 검색되었습니다.</div>
      <table>
        <ArticleHeader />
        <ArticleList contents={articles} />
      </table>

      {!showWrite && (
        <button className="write-button" onClick={onShowWriteFormHandler}>
          글쓰기
        </button>
      )}

      {showWrite && (
        <ArticleWriter
          inputData={{ subject, content, email, name }}
          showWriteForm={showWrite}
          onSubjectChange={onSubjectChangeHandler}
          onContentChange={onContentChangeHandler}
          onEmailChange={onEmailChangeHandler}
          onNameChange={onNameChangeHandler}
          onAddArticleClick={onAddArticleClickHandler}
          onResetClick={onResetClickHandler}
        />
      )}
    </div>
  );
};
export default ArticleMain;

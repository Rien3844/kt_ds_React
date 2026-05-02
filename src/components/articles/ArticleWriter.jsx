/** @format */

import { useImperativeHandle, useRef, useState } from "react";
import { Alert } from "../ui/Modal.jsx";
import { isString } from "../../utils/type.js";
import { getValidationResult } from "../../utils/errorhandler.js";
import { useDispatch, useSelector } from "react-redux";
import { articleAction } from "../../stores/toolkit/slices/articleSlice.js";
import {
  fetchAddArticle,
  fetchArticleList,
} from "../../http/articles/fetchArticles.js";

const Input = ({ id, title, type = "text", ref, ...props }) => {
  console.log("Input");
  return (
    <div className="input-field">
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} ref={ref} {...props} />
    </div>
  );
};

const Textarea = ({ id, title, ref, ...props }) => {
  console.log("Textarea");
  return (
    <div className="input-field">
      <label htmlFor={id}>{title}</label>
      <textarea id={id} ref={ref} {...props}></textarea>
    </div>
  );
};

const ArticleWriter = ({ errorHandleRef }) => {
  console.log("ArticleWriter");
  const [addError, setAddError] = useState();

  // useImperativeHandle 쓰는 이유? => 자식이 부모한테 값을주려고.
  useImperativeHandle(errorHandleRef, () => {
    return {
      setResponseError(fetchError) {
        if (isString(fetchError)) {
          setAddError(fetchError);
        } else {
          setAddError(getValidationResult(fetchError));
        }
      },
    };
  });

  const [viewMode, setViewMode] = useState("button");

  const reactReduxDispatcher = useDispatch();
  const { token, viewPageNo } = useSelector((store) => store.article);

  const subjectRef = useRef();
  const contentRef = useRef();
  const attachFileRef = useRef();
  const alertRef = useRef();

  const onAddArticleClickHandler = async (subject, content, attachFile) => {
    const addResult = await fetchAddArticle(
      token,
      subject,
      content,
      attachFile,
    );

    if (addResult.error) {
      errorHandleRef.current.setResponseError(addResult.error);
      reactReduxDispatcher(articleAction.addArticleFailure(addResult.error));
    } else {
      reactReduxDispatcher(articleAction.addArticleSuccess(addResult));

      const articleList = await fetchArticleList(viewPageNo);
      const {
        result: { count, result },
        pagination,
      } = articleList;
      reactReduxDispatcher(
        articleAction.refresh({ count, result, pagination }),
      );
    }
  };

  // 저장을 클릭하면 입력했던 값을 가져와 출력한다.
  const onSaveButtonClickHandler = () => {
    if (!subjectRef.current.value) {
      alertRef.current.showModal("제목을 입력해주세요.");
      return;
    }
    if (!contentRef.current.value) {
      alertRef.current.showModal("내용을 입력해주세요.");
      return;
    }

    onAddArticleClickHandler(
      subjectRef.current.value,
      contentRef.current.value,
      attachFileRef.current.files,
    );

    subjectRef.current.value = "";
    contentRef.current.value = "";
    attachFileRef.current.value = "";
  };

  const onViewChangeButtonClickHandler = (viewName) => {
    setViewMode(viewName);
  };

  return (
    <div className="article-writer">
      {viewMode === "button" && (
        <button
          type="button"
          onClick={onViewChangeButtonClickHandler.bind(this, "form")}
        >
          글쓰기
        </button>
      )}
      {viewMode === "form" && (
        <>
          <Alert dialogRef={alertRef} />
          {isString(addError) && <div>인증이 필요합니다.</div>}
          <Input id="subject" title="제목" ref={subjectRef} />
          <Textarea id="content" title="내용" ref={contentRef} />
          <Input
            type="file"
            id="file"
            title="첨부파일"
            ref={attachFileRef}
            multiple
          />

          <button
            type="button"
            className="positive-button"
            onClick={onSaveButtonClickHandler}
          >
            저장
          </button>
          <button
            type="button"
            className="negative-button"
            onClick={onViewChangeButtonClickHandler.bind(this, "button")}
          >
            취소
          </button>
        </>
      )}
    </div>
  );
};
export default ArticleWriter;

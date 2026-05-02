// articles.json 파일 불러오기
import { useEffect, useRef } from "react";
import ArticleHeader from "./ArticleHeader.jsx";
import ArticleList from "./ArticleList.jsx";
import ArticleWriter from "./ArticleWriter.jsx";
import ArticleWriter2 from "./ArticleWriter2.jsx";
import { fetchArticleList } from "../../http/articles/fetchArticles.js";
import { useDispatch, useSelector } from "react-redux";
import { articleAction } from "../../stores/toolkit/slices/articleSlice.js";
import ArticleLogin from "./ArticleLogin.jsx";
import ArticlePagination from "./ArticlePagination.jsx";

const ArticleMain = () => {
  // state를 변경했다!
  // 컴포넌트가 재실행된다. (props의 전달 여부 관계 없이.)
  console.log("ArticleMain");

  // ImperativeHandle를 위한 ref 생성.
  const writerRef = useRef();
  const storeDispatcher = useDispatch();

  const {
    count,
    result: articles,
    viewPageNo,
  } = useSelector((store) => store.article);

  const refreshArticleList = async () => {
    const articleList = await fetchArticleList(viewPageNo);
    /* articleList의 구조
    {
      result: { count: 0, result: [] },
      pagination: {},
    }
    */
    const {
      result: { count, result },
      pagination,
    } = articleList;

    storeDispatcher(articleAction.refresh({ count, result, pagination }));

    if (articleList.errors) {
      alert(articleList.errors);
    }
  };
  useEffect(() => {
    refreshArticleList();
  }, [viewPageNo]);

  return (
    <div className="wrapper">
      <ArticleLogin />
      <div>{count}개의 게시글이 검색되었습니다.</div>
      <table>
        <ArticleHeader />
        <ArticleList contents={articles} />
      </table>
      <ArticlePagination />
      <ArticleWriter errorHandleRef={writerRef} />
    </div>
  );
};
export default ArticleMain;

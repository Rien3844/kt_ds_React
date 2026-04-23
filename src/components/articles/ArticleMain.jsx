import ArticleHeader from "./articleHeader.jsx";
import ArticleList from "./articleList.jsx";
import articleData from "./articles.json";
import ArticleWriter from "./ArticleWriter.jsx";

const ArticleMain = () => {
  console.log(articleData);
  return (
    <div className="wrapper">
      <h1>게시글 목록</h1>
      <div>총 n개의 게시글이 검색되었습니다.</div>
      <table>
        <ArticleHeader />
        <ArticleList articles={articleData.articles} />
      </table>
      <ArticleWriter />
    </div>
  );
};
export default ArticleMain;

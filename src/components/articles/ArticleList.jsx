const ArticleList = ({ articles }) => {
  return (
    <tbody>
      {articles.map((board) => (
        <tr>
          <td>{board.id}</td>
          <td>{board.subject}</td>
          <td>{board.email}</td>
          <td>{board.viewCnt}</td>
          <td>{board.crtDt}</td>
        </tr>
      ))}
    </tbody>
  );
};
export default ArticleList;

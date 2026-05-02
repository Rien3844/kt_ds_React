import { useDispatch, useSelector } from "react-redux";
import { articleAction } from "../../stores/toolkit/slices/articleSlice";

const ArticlePagination = () => {
  const reactReduxDispatcher = useDispatch();
  const { pagination } = useSelector((store) => store.article);
  const { pageNo = 0, pageCount = 0 } = pagination;

  const prevPageHandler = () => {
    reactReduxDispatcher(articleAction.setViewPageNo(pageNo - 1));
  };

  const nextPageHandler = () => {
    reactReduxDispatcher(articleAction.setViewPageNo(pageNo + 1));
  };

  return (
    <div>
      {pageNo > 0 && <button onClick={prevPageHandler}>이전</button>}
      {pageNo === 0 && pageCount - 1 > pageNo && (
        <button onClick={nextPageHandler}>다음</button>
      )}
    </div>
  );
};

export default ArticlePagination;

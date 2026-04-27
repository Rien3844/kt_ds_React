/** @format */

const Input = ({ id, title, type = "text", ...props }) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} {...props} />
    </div>
  );
};

const Textarea = ({ id, title, value = "", onChange = () => {} }) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>{title}</label>
      <textarea id={id} onChange={onChange} value={value}></textarea>
    </div>
  );
};

const ArticleWriter = ({
  inputData: { subject, content, email, name },
  onSubjectChange,
  onContentChange,
  onEmailChange,
  onNameChange,
  onAddArticleClick,
  onResetClick,
}) => {
  return (
    <>
      <div className="article-writer">
        <Input
          id="subject"
          title="제목"
          value={subject}
          onChange={onSubjectChange}
        />
        <Input id="name" title="이름" value={name} onChange={onNameChange} />
        <Input
          id="email"
          title="이메일"
          value={email}
          onChange={onEmailChange}
        />
        <Textarea
          id="content"
          title="내용"
          value={content}
          onChange={onContentChange}
        />

        <button
          type="button"
          className="positive-button"
          onClick={onAddArticleClick}
        >
          저장
        </button>
        <button
          type="button"
          className="negative-button"
          onClick={onResetClick}
        >
          취소
        </button>
      </div>
    </>
  );
};
export default ArticleWriter;

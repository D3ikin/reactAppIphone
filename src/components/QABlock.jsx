import React, { useState } from "react";

const QABlock = ({ data }) => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleVisibility = (index) => {
    setVisibleAnswer(visibleAnswer === index ? null : index);
  };

  return (
    <div className="qa-container">
      {data.map((qa, index) => (
        <div
          key={index}
          className= {`qa-item ${'qa-item'+index}`}
          onClick={() => toggleVisibility(index)}
        >
          <div
            className={`question ${visibleAnswer === index && "question-open"}`}
          >
            {qa.question}
            {visibleAnswer === index ? (
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12.5" cy="13" r="12.5" fill="white" />
                <path
                  d="M16.9194 17.4194C16.7788 17.56 16.588 17.6391 16.3891 17.6391C16.1902 17.6391 15.9994 17.56 15.8588 17.4194L12.5 14.0606L9.14124 17.4194C9.00059 17.56 8.80983 17.6391 8.61091 17.6391C8.412 17.6391 8.22123 17.56 8.08058 17.4194C7.93993 17.2787 7.86091 17.088 7.86091 16.8891C7.86091 16.6901 7.93993 16.4994 8.08058 16.3587L11.4393 13L8.08058 9.64121C7.93993 9.50056 7.86091 9.30979 7.86091 9.11088C7.86091 8.91197 7.93993 8.7212 8.08058 8.58055C8.22123 8.4399 8.412 8.36088 8.61091 8.36088C8.80983 8.36088 9.00059 8.4399 9.14124 8.58055L12.5 11.9393L15.8588 8.58055C15.9994 8.4399 16.1902 8.36088 16.3891 8.36088C16.588 8.36088 16.7788 8.4399 16.9194 8.58055C17.0601 8.7212 17.1391 8.91197 17.1391 9.11088C17.1391 9.30979 17.0601 9.50056 16.9194 9.64121L13.5607 13L16.9194 16.3587C17.0601 16.4994 17.1391 16.6901 17.1391 16.8891C17.1391 17.088 17.0601 17.2787 16.9194 17.4194Z"
                  fill="#957DF2"
                />
              </svg>
            ) : (
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12.5" cy="13" r="12.5" fill="#957DF2" />
                <path
                  d="M18.75 13C18.75 13.1989 18.671 13.3897 18.5303 13.5303C18.3897 13.671 18.1989 13.75 18 13.75H13.25V18.5C13.25 18.6989 13.171 18.8897 13.0303 19.0303C12.8897 19.171 12.6989 19.25 12.5 19.25C12.3011 19.25 12.1103 19.171 11.9697 19.0303C11.829 18.8897 11.75 18.6989 11.75 18.5V13.75H7C6.80109 13.75 6.61032 13.671 6.46967 13.5303C6.32902 13.3897 6.25 13.1989 6.25 13C6.25 12.8011 6.32902 12.6103 6.46967 12.4697C6.61032 12.329 6.80109 12.25 7 12.25H11.75V7.5C11.75 7.30109 11.829 7.11032 11.9697 6.96967C12.1103 6.82902 12.3011 6.75 12.5 6.75C12.6989 6.75 12.8897 6.82902 13.0303 6.96967C13.171 7.11032 13.25 7.30109 13.25 7.5V12.25H18C18.1989 12.25 18.3897 12.329 18.5303 12.4697C18.671 12.6103 18.75 12.8011 18.75 13Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
          {visibleAnswer === index && <div className="answer">{qa.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default QABlock;

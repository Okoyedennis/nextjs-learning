import React, { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const FeedbackPage = (props) => {
  const [feedbackData, setFeedbackData] = useState();

  const loadFeedbackHandler = (id) => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  };
  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeedbackPage;

export async function getStaticProps() {
  //You Should not use fetch() inside of getStaticProps or getServerSideProps to talk to you own API runnin on the same server INSIDE DO THIS BELOW
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

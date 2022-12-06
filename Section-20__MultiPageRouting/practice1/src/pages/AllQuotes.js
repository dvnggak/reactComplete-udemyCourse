import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Dev",
    text: "I am a React developer !!",
  },
  {
    id: "q2",
    author: "Deva",
    text: "I am a Front-End Engineer",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;

import React, { Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found !</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <div className="centered">
        <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
          Load Comments
        </Link>
      </div>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;

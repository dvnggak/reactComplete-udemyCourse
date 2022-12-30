import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS is aa great Framework
          </Link>
        </li>
        <li>NextJS is aa hard Framework</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;

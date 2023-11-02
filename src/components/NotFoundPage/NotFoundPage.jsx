import React from "react";
import { Link } from "react-router-dom";


const NotFoundPage = () => {
  return <div>
    <p>Not found page</p>
    <p>Go back to <Link to="/">home</Link></p>
    </div>;
};

export default NotFoundPage;

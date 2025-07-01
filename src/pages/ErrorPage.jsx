import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("first", error?.data);
  return (
    <>
      <h1 style={{ textAlign: "center", color: "green" }}>
        OOps! An error occured.
      </h1>
      {error ? (
        <p style={{ textAlign: "center", color: "black" }}> {error.data}</p>
      ) : (
        <></>
      )}
      <NavLink
        to="/"
        style={{
          textAlign: "center",
        //   alignItems: "center",
          color: "blue",
          textDecoration: "none",
        }}
      >
        <button>Go Home</button>
      </NavLink>
    </>
  );
};

export default ErrorPage;

import React from "react";
import Spinner from "./Spinner";

export default function Hoc(Comp) {
  return function withLoadingComp({ isLoading, ...props }) {
    if (!isLoading) return <Comp {...props} />;
    return <Spinner />;
  };
}

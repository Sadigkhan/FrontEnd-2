import React from "react";
import { useSelector } from "react-redux";

export default function ViewCount() {
  const count = useSelector((state) => state.counter.value);

  return <div>count is:  {count}</div>;
}

import React, { useEffect, useRef } from "react";

const RenderCount = () => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  return <span>{count.current}</span>;
};

export default RenderCount;

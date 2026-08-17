import React from "react";

import { useSearchParams } from "react-router-dom";

function Error() {
    const [searchParams] = useSearchParams();
  return (
    <div>
      <h1>Error {searchParams.get("status")}</h1>
      <p>{searchParams.get("message") || "Something went wrong"}</p>
    </div>
  );
}

export default Error;

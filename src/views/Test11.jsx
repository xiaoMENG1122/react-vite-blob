// import React from "react";
// import $http from "../api/index";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Test11() {
  let Input123 = `<div class="note">

Some *emphasis* and <strong>stron123</strong>!

</div>`;
  return (
    <div>
      test1
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={Input123} />,
      document.body
    </div>
  );
}

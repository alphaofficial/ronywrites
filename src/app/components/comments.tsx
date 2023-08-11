"use client";

import Giscus from "@giscus/react";

export function Comment() {
  return (
    <Giscus
      id="comments"
      repo="alphaofficial/ronywrites"
      repoId="R_kgDOKBBv2Q"
      category="Announcements"
      categoryId="DIC_kwDOKBBv2c4CYO-d"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="1"
      theme="light"
      inputPosition="top"
      loading="lazy"
      lang={"en"}
    />
  );
}

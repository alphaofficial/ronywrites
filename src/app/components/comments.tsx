"use client";

import Giscus from "@giscus/react";

export function Comment() {
  return (
    <Giscus
      id="comments"
      repo="alphaofficial/ronywrites"
      repoId="R_kgDOG87LtQ"
      category="Announcements"
      categoryId="DIC_kwDOG87Ltc4CYi0-"
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

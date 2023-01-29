import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
function Page({ name, icon, link, des, warn }) {
  const router = useRouter();

  return (
    <div
      id="page"
      onClick={() => {
        link && router.push("/" + link);
      }}
    >
      {icon}
      <div id="page_content">
        {warn && <div id="page_content_warn">{warn.text}</div>}
        <div id="page_content_name">{name}</div>
        <div id="page_content_des">{des}</div>
      </div>
    </div>
  );
}

export default Page;

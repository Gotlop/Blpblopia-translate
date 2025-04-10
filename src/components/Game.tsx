"use client";

import { useEffect, useState } from "react";

export default function Game(
  { title }: { title?: string } = { title: "Blepblopia Translator" }
) {
  const appUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${appUrl}/blepblopia.js`;
    script.onload = () => {
      setIsScriptLoaded(true);
      window.startBlepblopia(document.getElementById("blepblopia"));
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [appUrl]);

  if (!isScriptLoaded) {
    return <div>{title} Loading...</div>;
  }

  return (
    <div className="container" style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>{title}</h1>
      <div id="blepblopia">Loading...</div>
    </div>
  );
}

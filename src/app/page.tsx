"use client";

import { Metadata } from "next";
import App from "./app";

import Game from "../components/Game";

export default function Page() {
  return <Game />;
}
const appUrl = process.env.NEXT_PUBLIC_URL;

const frame = {
  version: "next",
  imageUrl: `${appUrl}/og-image`,
  button: {
    title: "Blepblopia Translator",
    action: {
      type: "launch_frame",
      name: "translate",
      url: appUrl,
      splashImageUrl: `${appUrl}/splas.png`,
      splashBackgroundColor: "#a1a1ff",
    },
  },
};

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blepblopia Translator",
    openGraph: {
      title: "Blepblopia Translator",
      description: "Translate your text into Blepblopia language",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return (<App />);
}

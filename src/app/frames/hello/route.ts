import { NextResponse } from "next/server";
import { createFrameHandler } from "@farcaster/frame-sdk";

export const POST = createFrameHandler({
  async handler({ message }) {
    try {
      return {
        image: "https://blpblopia-translator.vercel.app/og-image",
        buttons: [
          { label: "Translate", action: "post", target: "/frames/translate" },
        ],
      };
    } catch (error) {
      console.error("Frame error:", error);
      return {
        image: "https://blpblopia-translator.vercel.app/og-image",
        buttons: [
          { label: "Error", action: "post", target: "/frames/hello" },
        ],
      };
    }
  },
});

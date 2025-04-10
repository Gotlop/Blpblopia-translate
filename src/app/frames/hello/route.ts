import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Ambil data dari request (opsional, tergantung kebutuhan)
    const body = await req.json();
    const message = body?.message || "Hello from Blepblopia Translator";

    // Kembalikan respons Farcaster Frame
    return NextResponse.json({
      image: "https://blpblopia-translator.vercel.app/og-image",
      buttons: [
        { label: "Translate", action: "post", target: "/frames/translate" },
      ],
    });
  } catch (error) {
    console.error("Frame error:", error);
    return NextResponse.json({
      image: "https://blpblopia-translator.vercel.app/og-image",
      buttons: [
        { label: "Error", action: "post", target: "/frames/hello" },
      ],
    });
  }
}

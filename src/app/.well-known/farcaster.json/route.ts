export async function GET() {
   const appUrl = process.env.NEXT_PUBLIC_URL;
 
   const config = {
     accountAssociation: {
       header:
         "eyJmaWQiOjM2MjEsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgyY2Q4NWEwOTMyNjFmNTkyNzA4MDRBNkVBNjk3Q2VBNENlQkVjYWZFIn0",
       payload: "eyJkb21haW4iOiJmcmFtZXMtdjIudmVyY2VsLmFwcCJ9",
       signature:
         "MHhiNDIwMzQ1MGZkNzgzYTExZjRiOTllZTFlYjA3NmMwOTdjM2JkOTY1NGM2ODZjYjkyZTAyMzk2Y2Q0YjU2MWY1MjY5NjI5ZGQ5NTliYjU0YzEwOGI4OGVmNjdjMTVlZTdjZDc2YTRiMGU5NzkzNzA3YzkxYzFkOWFjNTg0YmQzNjFi",
     },
    "frame": {
    "version": "1",
    "name": "Blepblopia Translator",
    "iconUrl": "https://blpblopia-translator.vercel.app/icon.png",
    "imageUrl": "https://blpblopia-translator.vercel.app/og-image.png",
    "buttonTitle": "Translate",
    "splashImageUrl": "https://blpblopia-translator.vercel.app/splas.png",
    "splashBackgroundColor": "#a1a1ff",
    "webhookUrl": "https://blpblopia-translator.vercel.app/api/webhook",
    "homeUrl": "https://blpblopia-translator.vercel.app/"
  }
} 
   return Response.json(config);
}

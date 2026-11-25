# Project 8: L'Oréal Chatbot

## Live deployment

GitHub Pages: https://squirreler.github.io/08-prj-loreal-chatbot/

GitHub Pages publishes the `main` branch. Commit and push website changes to update this link.

### Cloudflare deployment

https://loreal-chatbot-project-08.dbbemailme.workers.dev

To publish your latest changes to this same URL, run `bunx wrangler deploy` from this project's folder. If needed, run `bunx wrangler login` first. Only the website files allowed by `.assetsignore` are uploaded.

This deployment currently contains the starter project; the AI integration still needs to be completed.

L’Oréal is exploring the power of AI, and your job is to showcase what's possible. Your task is to build a chatbot that helps users discover and understand L’Oréal’s extensive range of products—makeup, skincare, haircare, and fragrances—as well as provide personalized routines and recommendations.

## 🚀 Launch via GitHub Codespaces

1. In the GitHub repo, click the **Code** button and select **Open with Codespaces → New codespace**.
2. Once your codespace is ready, open the `index.html` file via the live preview.

## ☁️ Cloudflare Note

When deploying through Cloudflare, make sure your API request body (in `script.js`) includes a `messages` array and handle the response by extracting `data.choices[0].message.content`.

Enjoy building your L’Oréal beauty assistant! 💄

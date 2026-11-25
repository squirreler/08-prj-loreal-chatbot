# Project 8: L'Oréal Chatbot

## Live deployment

GitHub Pages: https://squirreler.github.io/08-prj-loreal-chatbot/

GitHub Pages publishes the `main` branch. Commit and push website changes to update this link.

### Cloudflare deployment

https://loreal-chatbot-project-08.dbbemailme.workers.dev

To publish your latest changes to this same URL, run `bunx wrangler deploy` from this project's folder. If needed, run `bunx wrangler login` first. Only the website files allowed by `.assetsignore` are uploaded.

Implemented: L’Oréal branding, topic-restricted advisor, secure Worker proxy, and the Display User Question LevelUp. Each submission replaces the previous question and answer.

L’Oréal is exploring the power of AI, and your job is to showcase what's possible. Your task is to build a chatbot that helps users discover and understand L’Oréal’s extensive range of products—makeup, skincare, haircare, and fragrances—as well as provide personalized routines and recommendations.

## 🚀 Launch via GitHub Codespaces

1. In the GitHub repo, click the **Code** button and select **Open with Codespaces → New codespace**.
2. Once your codespace is ready, open the `index.html` file via the live preview.

## ☁️ Cloudflare Note

When deploying through Cloudflare, make sure your API request body (in `script.js`) includes a `messages` array and handle the response by extracting `data.choices[0].message.content`.

Enjoy building your L’Oréal beauty assistant! 💄

## Inference configuration

The browser calls this project's Cloudflare Worker at `/api/chat`. The Worker uses the existing `OPENAI_API_KEY` secret as a bearer credential for the custom inference server; it is not an OpenAI-issued key. Set `INFERENCE_URL` to the full Chat Completions endpoint and `INFERENCE_MODEL` to the server's model name using Cloudflare Worker settings. No inference endpoint is assumed while the server is being changed.

Keep local `.env` files untracked. The existing `.assetsignore` allowlist excludes all credentials and Worker source from static uploads. Never put a credential in frontend JavaScript.

Live inference and response relevance still need verification when the server is ready. The reflection rubric is present in `PROJECT-INFO.md`, but the actual reflection questions were not included.

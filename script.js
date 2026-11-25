/* Show just the latest question and answer, as requested for this LevelUp. */
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatWindow = document.getElementById("chatWindow");
const sendBtn = document.getElementById("sendBtn");
const workerURL = "https://loreal-chatbot-project-08.dbbemailme.workers.dev/api/chat";
chatWindow.textContent = "Hello! Ask me about L’Oréal products or beauty routines.";

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const question = userInput.value.trim();
  if (!question || sendBtn.disabled) return;
  // textContent safely displays user and model text without interpreting HTML.
  const latestQuestion = document.createElement("p");
  latestQuestion.className = "msg user";
  latestQuestion.textContent = `You: ${question}`;
  const answer = document.createElement("p");
  answer.className = "msg ai";
  answer.textContent = "Thinking…";
  chatWindow.replaceChildren(latestQuestion, answer);
  sendBtn.disabled = true;
  try {
    const response = await fetch(workerURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [{ role: "user", content: question }] }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Please try again later.");
    if (!data.choices?.[0]?.message?.content) throw new Error("No reply received. Please try again.");
    answer.textContent = data.choices[0].message.content;
    userInput.value = "";
  } catch (error) {
    answer.textContent = error.message;
  } finally {
    sendBtn.disabled = false;
    userInput.focus();
  }
});

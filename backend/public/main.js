document.addEventListener("DOMContentLoaded", () => {
  let loc = window.location;
  let uri = loc.protocol === "https:" ? "wss:" : "ws:";
  uri += "//" + loc.host;
  uri += loc.pathname + "ws";

  const ws = new WebSocket(uri);
  ws.onopen = function () {
    console.log("Connected");
  };

  ws.onmessage = function (evt) {
    const out = document.getElementById("output");
    const data = JSON.parse(evt.data);
    out.innerHTML += `${data.username}: ${data.message} at ${data.timestamp}<br>`;
  };

  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const messageText = document.getElementById("input").value;
    const message = {
      username: username || "風吹けば名無し",
      message: messageText,
      timestamp: new Date().toISOString(),
    };
    ws.send(JSON.stringify(message));
  });
});

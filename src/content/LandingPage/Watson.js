// script for watson assistant

window.watsonAssistantChatOptions = {
  integrationID: "07bf00c1-e62b-43d5-a7f2-823c623a641e", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "2d490477-89ee-44ba-899d-d6e9f8391e5a", // The ID of your service instance.
  onLoad: function (instance) {
    instance.render();
  },
};
setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
  document.head.appendChild(t);
});

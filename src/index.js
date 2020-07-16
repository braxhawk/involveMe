import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri:
    "https://api.us-south.assistant.watson.cloud.ibm.com/instances/2d490477-89ee-44ba-899d-d6e9f8391e5a",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_WATSON_ASSISTANT_TOKEN}`,
  },
});

// const AssistantV2 = require('ibm-watson/assistant/v2');
// const { IamAuthenticator } = require('ibm-watson/auth');

// const assistant = new AssistantV2({
//   version: '{2020-04-01}',
//   authenticator: new IamAuthenticator({
//     apikey: '{dXzzciHz9gDKXxZ_4hfxeIk4QeBrObbaUEoc4w_gXa6m}',
//   }),
//   url: '{https://api.us-south.assistant.watson.cloud.ibm.com/instances/2d490477-89ee-44ba-899d-d6e9f8391e5a}',
// });

// assistant.createSession({
//   assistantId: '{273edce2-b488-45e3-9823-51a1c93f8faf}'
// })
//   .then(res => {
//     console.log(JSON.stringify(res.result, null, 2));
//   })
//   .catch(err => {
//     console.log(err);
//   });

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

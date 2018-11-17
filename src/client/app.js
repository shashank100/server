import React from "react";
import ReactDOM from "react-dom";
import Routes from "src/client/routes/routes";
import video from "src/client/videos/video.mp4";
import store from "src/client/store/store"
import { Provider } from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("mount-point")
);

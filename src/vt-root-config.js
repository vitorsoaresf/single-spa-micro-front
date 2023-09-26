import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: () => location.pathname === "/",
});

registerApplication({
  name: "@vt/react-single",
  app: () => System.import("@vt/react-single"),
  activeWhen: () => location.pathname === "/react-single",
});

start({
  urlRerouteOnly: true,
});

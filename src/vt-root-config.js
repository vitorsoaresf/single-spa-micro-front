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

registerApplication({
  name: "@vt/react-multiples",
  app: () => System.import("@vt/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@vt/react-route",
  app: () => System.import("@vt/react-route"),
  activeWhen: () => location.pathname === "/react-route",
});

registerApplication({
  name: "@vt/react-lazy",
  app: () => System.import("@vt/react-lazy"),
  activeWhen: ["/react-lazy"],
});

registerApplication({
  name: "@vt/react-header",
  app: () => System.import("@vt/react-header"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});

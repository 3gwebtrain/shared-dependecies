import { registerApplication, start } from "single-spa";


registerApplication(
  "login",
  () => System.import("@ibo/login"),
  (location) => !location.pathname.startsWith("/login")
);


/* 
  Enables production mode in angular as it can only be set once and be in one mode for the whole system.
  Angular apps no longer need to call enableProdMode() as It would produce an error.
*/
System.import("@angular/core").then(a => {
  a.enableProdMode();
  start({
    urlRerouteOnly: true,
  });
});

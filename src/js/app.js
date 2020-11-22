import barba from "@barba/core";
import barbaCss from "@barba/css";

// Use the css plugin
barba.use(barbaCss);

barba.init({
  transitions: [
    {
      name: "home", // customize css class name space
      beforeOnce() {
        console.log("beforeOnce");
      },
      // `once` hook triggers once on page load
      once() {
        console.log("once"); // Will NOT run using CSS plugin, it's used to listen for CSS transition
      },
      afterOnce() {
        console.log("afterOnce");
      },
    },
    {
      name: "fade",
      // `leave` hook triggers on leaving a page
      to: {
        namespace: ["fade"], // to which pages do we trigger this fade transition
      },
      leave() {},
      // `enter` hook triggers on entering a page
      enter() {},
    },
  ],
});

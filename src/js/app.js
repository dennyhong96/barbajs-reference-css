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
      // `once` hook happens once on page load
      once() {
        console.log("once"); // Will NOT run using CSS plugin, it's used to listen for CSS transition
      },
      afterOnce() {
        console.log("afterOnce");
      },
    },
  ],
});

import barba from "@barba/core";
import barbaCss from "@barba/css";

// Use the css plugin
barba.use(barbaCss);

const body = document.querySelector("body");

// Global hook - runs before any transition defined in barba init
barba.hooks.before((data) => {
  console.log(data);
  const background = data.current.container.dataset.background;

  // Overwrite default white bg on body so fade between pages seems smooth
  body.style.setProperty("--page-background", background);
});

barba.init({
  transitions: [
    // Home
    {
      name: "home", // customize css class name space
      beforeOnce() {
        console.log("beforeOnce");
      },
      // `once` hook triggers once on page load
      once() {
        // Empty hook to generate classes...
        console.log("once"); // Will NOT run using CSS plugin, it's used to listen for CSS transition
      },
      afterOnce() {
        console.log("afterOnce");
      },
    },

    // Fade
    {
      name: "fade",
      // `leave` hook triggers on leaving a page
      to: {
        namespace: ["fade"], // to which pages do we trigger this fade transition
      },
      leave() {
        // Empty hook to generate classes...
      },
      // `enter` hook triggers on entering a page
      enter() {},
    },

    // Clip
    {
      name: "clip",
      sync: true, // Both containers will be in the DOM at same time
      to: {
        namespace: ["clip"],
      },
      leave() {},
      enter() {},
    },

    // Cover
    {
      name: "with-cover",
      to: {
        namespace: ["with-cover"],
      },
      leave() {},
      enter() {},
    },
  ],
});

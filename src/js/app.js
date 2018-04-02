var App = App || {};

// Boolean to determine if app is loaded
App.loaded = false;

App.init = function() {
  // Add code here for your init methods
  $(document).on("app:loaded", function() {
    App.loaded = true;
  });

  // Debug messages
  $(document).trigger("app:loaded");
  console.log("[App] Loaded");
};

$(function() {
  // Load app once ready
  App.init();
});
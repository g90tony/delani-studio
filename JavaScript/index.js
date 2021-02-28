$("#design-image").click(() => {
  $("#design-image").addClass("hidden");
  $("#design-header").addClass("hidden");
  $("#design-description").removeClass("hidden");
});

$("#development-image").click(() => {
  $("#development-image").addClass("hidden");
  $("#development-header").addClass("hidden");
  $("#development-description").removeClass("hidden");
});

$("#project-image").click(() => {
  $("#project-image").addClass("hidden");
  $("#project-header").addClass("hidden");
  $("#project-description").removeClass("hidden");
});

$("#design-description").click(() => {
  $("#design-image").removeClass("hidden");
  $("#design-header").removeClass("hidden");
  $("#design-description").addClass("hidden");
});

$("#development-description").click(() => {
  $("#development-image").removeClass("hidden");
  $("#development-header").removeClass("hidden");
  $("#development-description").addClass("hidden");
});

$("#project-description").click(() => {
  $("#project-image").removeClass("hidden");
  $("#project-header").removeClass("hidden");
  $("#project-description").addClass("hidden");
});

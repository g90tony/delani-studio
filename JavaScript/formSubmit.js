const state = { name: "", email: "", message: "" };

$("#name").change((e) => {
  state.name = e.target.value;
});
$("#email").change((e) => {
  state.email = e.target.value;
});
$("#message").change((e) => {
  state.message = e.target.value;
});

$("#contact-form").submit((e) => {
  e.preventDefault();

  alert(
    `Hello ${state.name}, thank you for sending your message. We will respond promptly...`
  );
  console.log(state);
});

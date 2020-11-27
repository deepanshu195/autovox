function formSubmit(e) {
  e.preventDefault();
  console.log("doneee", e);
}
var form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
  console.log("done", event);
}
form.addEventListener("submit", handleForm);

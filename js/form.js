const trig = document.querySelector('#trigger');
const closer = document.querySelector('#close');

trig.addEventListener('click', showForm);
closer.addEventListener('click', hideForm);

function showForm() {
  document.getElementById("formContainer").style.display = "block";
  document.getElementById("trigger").style.display = "none";
  document.getElementById("close").style.display = "inline-block";
  return false;
}

function hideForm() {
  document.getElementById("formContainer").style.display = "none";
  document.getElementById("close").style.display = "none";
  document.getElementById("trigger").style.display = "inline-block";
  return false;
}

function wrapUp(){
  alert("Thank you for reaching us. We will answer your question: '"+document.getElementById("tarea").value+ "' as soon as we are able");
  hideForm();
}

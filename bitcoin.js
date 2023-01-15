const copyFunction = () => {
  const element = document.querySelector('#textaddr').value;
  navigator.clipboard.writeText(element);
  document.querySelector('.copied').style.display = "block";
  setInterval( () => {document.querySelector('.copied').style.display = "none";}, 2300);
}
document.addEventListener('DOMContentLoaded', function() {
  const div1 = document.createElement('div');
  div1.setAttribute('class', 'crt_frame');
document.body.insertBefore(div1, document.body.firstChild);
const crt = document.createElement('div');
div1.setAttribute('class', 'crt');
document.body.insertBefore(crt, document.body.firstChild);
});
document.head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="https://raw.githubusercontent.com/EathanLangford/eathanlangford.github.io/master/square.css">`);

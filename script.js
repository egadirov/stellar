console.log('Hello from test.js!');

document.addEventListener('DOMContentLoaded', function() {
  const message = document.createElement('div');
  message.textContent = 'Hello from the custom JS file!';
  message.style.padding = '10px';
  message.style.border = '1px solid black';
  message.style.margin = '10px 0';
  document.body.appendChild(message);
});

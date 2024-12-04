// Select the form element
const form = document.getElementById('Form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the input values
  const name = document.getElementById('input1').value;
  const email = document.getElementById('input2').value;

  // Show an alert with the values
  alert(`Thingy1: ${name}\nThingy2: ${email}`);

  document.getElementById('li1').textContent = `${name}`;
  document.getElementById('li2').textContent = `${email}`;
})
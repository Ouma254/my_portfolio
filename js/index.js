// Basic form alert (you can later connect it to Formspree or Netlify)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
});

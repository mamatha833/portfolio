function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
 

 
  (function () {
    emailjs.init("kYOEU76rmkWRynGV6"); 
  })();
  

  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
  
    const formElement = this;
  
    emailjs.sendForm('service_lmve68p', 'template_f7xd5ti', formElement, 'kYOEU76rmkWRynGV6') 
      .then(function (response) {
        console.log('Success:', response);
        alert('Your message has been sent!');
      }, function (error) {
        console.error('Error:', error);
        alert('Oops! Something went wrong.');
      });
  });
  
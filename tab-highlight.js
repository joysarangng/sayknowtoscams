document.querySelectorAll('.tablinks').forEach(function(link) {
  link.addEventListener('click', function() {
    document.querySelectorAll('.tablinks').forEach(function(link) {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});
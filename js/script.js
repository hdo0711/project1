document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for signing up! You will receive an email with a coupon code shortly.');
  });
});

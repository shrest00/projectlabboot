  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new bootstrap.Popover(el));

  function fireToast(title, body) {
    document.getElementById('toastTitle').textContent = title;
    document.getElementById('toastBody').textContent = body;
    new bootstrap.Toast(document.getElementById('mainToast'), { delay: 4500 }).show();
  }

  document.getElementById('alertDemoBtn').addEventListener('click', () =>
    fireToast('Reminder 💊', "Time for your Vitamin D supplement — don't forget your 1:00 PM dose!"));

  function showCheckinToast() {
    fireToast('Check-in Saved ✅', 'Your daily wellness data has been recorded. Keep it up, Alex!');
  }

  function handleSubscribe() {
    const email = document.getElementById('wellnessEmail').value.trim();
    fireToast(
      email ? 'Subscribed! 🌿' : 'Email Required',
      email ? 'Your first Wellness Brief arrives this Monday morning.' : 'Please enter your email address to subscribe.'
    );
  }
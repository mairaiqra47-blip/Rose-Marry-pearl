const submitBtn = document.getElementById('submitBtn');
const successMsg = document.getElementById('successMsg');
const dateInput = document.getElementById('date');
const salonNumber = '923197069815';

const now = new Date();
const today = now.getFullYear() + '-' +
    String(now.getMonth() + 1).padStart(2, '0') + '-' +
    String(now.getDate()).padStart(2, '0');

dateInput.min = today;

submitBtn.addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const date = dateInput.value;
    const time = document.getElementById('time').value;
    const notes = document.getElementById('message').value.trim();

    if (!name || !phone || !service || !date || !time) {
        alert('Please fill in all required fields.');
        return;
    }

    if (date < today) {
        alert('Please choose today or a future date.');
        return;
    }

    const text = `New booking request\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nTime: ${time}\nNotes: ${notes || 'None'}`;

    window.location.href = `https://wa.me/${salonNumber}?text=${encodeURIComponent(text)}`;

    successMsg.style.display = 'block';
});
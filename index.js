const name = document.getElementById('name');
const date = document.getElementById('date');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const btn = document.getElementById('sendBtn');

btn.addEventListener('click',() => {
    alert('Your reservation send');
    name.value = '';
    date.value = '';
    phone.value = '';
    message.value = '';
})
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
e.preventDefault();

const formData = {
    name: form.name.value,
    email: form.email.value,
    contact: form.contact.value,
    message: form.message.value
};

try {
    const response = await fetch('https://formspree.io/f/xpwjzjrr', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
    });

    const data = await response.json();
    
    if (data.ok) {
    alert('Message sent! 🎉');
    form.reset();
    } else {
    alert('Oops! Something went wrong.');
    }
} catch (error) {
    alert('Error sending message.');
}
});
document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const message = document.getElementById('message').value;

    // Here you can add code to handle the donation (e.g., send data to a server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Amount:', amount);
    console.log('Message:', message);

    alert('ধন্যবাদ আপনার ডোনেশনের জন্য!');
});

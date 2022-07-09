const form = document.getElementById("login-form")
form.addEventListener('submit', login)

async function login(e) {
    e.preventDefault()
    const userEmail = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            userEmail,
            password
        })
    }).then((res) => res.json())
}
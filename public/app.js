const form = document.getElementById("reg-form")
form.addEventListener('submit', registerUser)

async function registerUser(e) {
    e.preventDefault()
    const userName = document.getElementById("userName").value
    const userPhone = document.getElementById("userPhone").value
    const userEmail = document.getElementById("userEmail").value
    const password = document.getElementById("password").value
    let isVip = document.getElementById("isVip").value

    let vip = (isVip === "on" ? true : false)

    fetch('/signup', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            userName,
            userPhone,
            userEmail,
            password,
            vip
        })
    }).then((res) => res.json())
}
$(document).ready(function () {
    $.get('http://localhost:3000/users', data => {

        data.forEach(u => {
            $('tbody').append(`
        <tr>
        <td>${u.name.replace(/ñ/g, 'nn')}</td>
        <td>${u.lastname.replace(/ñ/g, 'nn')}</td>
        <td>${u.email}</td>
        </tr>
        `)
        })
    })
})

$('form').submit(function (e) {
    e.preventDefault()
    newUser()
})

function newUser() {
    const name = document.querySelector('#new-name').value;
    const lastname = document.querySelector('#new-lastname').value;
    const email = document.querySelector('#new-mail').value;
    const password = document.querySelector('#new-pass').value;

    const data = {
        email,
        password,
        name,
        lastname,
    }


    $.post('http://localhost:3000/users', data, (resp, status) => {
        console.log(resp + status)
        window.location.href = '/'
    })
}
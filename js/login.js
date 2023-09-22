document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // checks if the username and password are correct for employee login   
        if (username.value === 'sandeep' && password.value === '123') {
            window.location.href = 'employeePage.html';
        }
        // checks if the username and password are correct for admin login
        else if(username.value === 'admin' && password.value === '123'){
            window.location.href = 'adminPage.html';
        }
        //if not then an alert is displayed
        else
            alert('Invalid username or password');
    });
});

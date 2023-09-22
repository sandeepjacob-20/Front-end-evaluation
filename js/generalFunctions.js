//the logout function is used to take the user back to the login page
function logout(){
    console.log('logout')
    window.location.href = 'login.html';
}

// home function is used to take the user back to the employee page
function home(){
    console.log('home')
    window.location.href = 'employeePage.html';
}


//pending function is invoked by the pending tab in admin menu
function pending(){
    window.location.href = 'adminPage.html';
}
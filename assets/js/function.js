function checkaccount() {
    $.ajax(baseUrl + "User/checkaccount", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem(varJWT)
        },
        error: (res) => {
            location.href = 'Login.html'
        }
    })
}
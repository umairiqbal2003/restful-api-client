function getSignup(){
    let userfullname = document.querySelector("#fullname").value
    let  userEmail= document.querySelector("#email").value
    let userPassword = document.querySelector("#password").value
    let userCity = document.querySelector("#city").value

    axios.post('https://small-social-app.herokuapp.com/user', {
        "fullname": userfullname,
        "Email": userEmail,
        "Password" : userPassword,
        "City" : userCity
      })
      .then(function (response) {
        console.log(response.data);
        document.querySelector("#message").innerHTML = response.data
      })
      .catch(function (error) {
        console.log(error.message);
      });
}

function getAllUser(){
    axios.get('https://small-social-app.herokuapp.com/user')
  .then(function (response) {
    // handle success
    console.log(response.data);

    response.data.map(eachUser =>{
        document.querySelector("#allUserslist").innerHTML += `Fullname: ${eachUser.fullname} </br>
        Email: ${eachUser.Email} </br> Password: ${eachUser.Password} </br> City:${eachUser.City} </br> </br>`

    })

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
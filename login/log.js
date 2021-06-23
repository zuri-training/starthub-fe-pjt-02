function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile()
    document.querySelector('#close').style.display = 'none';
    document.querySelector('#form').style.display = 'block';

    console.log(`User is ${JSON.stringify(profile)}`)

    var element = document.querySelector('#content')
    element.innerText = profile.getName()

    var image = document.createElement('img')
    image.setAttribute('src', profile.getImageUrl())
    element.append(image)
    
    // location.replace("/loggedin.html")
  }

  function signOut() {
    gapi.auth2.getAuthInstance().signOut().then(function() {
      var newElement = document.querySelector('#content')
      newElement.innerText = 'Signed Out'
      document.querySelector('#close').style.display = 'block';
      document.querySelector('#form').style.display = 'none';
      console.log('user signed out');
    })
  }

  function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  
  function onFailure(error) {
    console.log(error);
  }

  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }

 

 
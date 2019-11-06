firebase.auth().onAuthStateChanged(function(user) {
  
    var user = firebase.auth().currentUser;
  if (user) {
    // User is signed in.
window.location.replace("index.html");
  }


});





function logout(){
	console.log("u clicked me");
  firebase.auth().signOut();
}

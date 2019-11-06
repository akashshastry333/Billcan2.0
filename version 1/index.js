firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
window.location.replace("main.html");
  }


});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}

/*function setup(){
	 var config = {
    apiKey: "AIzaSyDXSN-l9wQheVVLylybf1LKgQEyX2x3KXo",
    authDomain: "ahalia-transport-managem-22ad2.firebaseapp.com",
    databaseURL: "https://ahalia-transport-managem-22ad2.firebaseio.com",
    projectId: "ahalia-transport-managem-22ad2",
    storageBucket: "ahalia-transport-managem-22ad2.appspot.com",
    messagingSenderId: "627185760886"
  };
  firebase.initializeApp(config);

}
functon s1lo(){
	var database = firebase.database().ref('Shuttle Locations/sWpPz7KX3qezTgSUwsSqtSHsYdz1/l');
	database.on('value',gotData,errData)
	function gotData(data){
		console.log(data);
	
		var reports = data.val();
		var keys = object.keys(reports);
		console.log(keys);
		for(var i = 0;i < keys.length;i++)
		{
			var k = keys[i];
			var s = reports[k].destination;
			var id = reportss[k].id;
			var pass_no = reports[k].pass_no;
			var shuttle = reports[k].shuttle;
			var li = createElement('li','destination: '+s+'number of passengers: '+pass_no+'current location: '+id+'shuttle name: '+shuttle);
			li.parent('d');
			window.alert('destination: ');
		
	}
	function errData(err)
		{
			console.log('error:');
			console.log('err');
		}
}
		}*/	
			
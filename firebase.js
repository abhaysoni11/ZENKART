const firebaseConfig = {
    apiKey: "AIzaSyAP7UCcwS_fp5KTwo2vyV1LkK8LLGMrZHI",
    authDomain: "zenkart-d5279.firebaseapp.com",
    databaseURL: "https://zenkart-d5279-default-rtdb.firebaseio.com",
    projectId: "zenkart-d5279",
    storageBucket: "zenkart-d5279.appspot.com",
    messagingSenderId: "983145251894",
    appId: "1:983145251894:web:c8a008c35c3751e76d0497",
    measurementId: "G-0X4WF1PJLB"
  };
// initialize firebase
  firebaseConfig.initializeApp(firebaseConfig);

  //reference database
  var loginformDB  = firebase.database().ref('loginform');

  document.getElementById("loginform").addEventListener("login", loginform);

  function loginform(e){
    e.preventDefault();

    var name = getElementByVal('name');
    var emailid = getElementByVal('emailid');
    var msgcontent = getElementByVal('msgcontent');

     

  }

  const saveMasseges = (name , emailid, msgcontent) => {
    var newLoginForm = loginformDB.push();

    newContractForm.set({
      name : name,
      emailid : emailid,
      masgContent : msgcontent,
    });
  };

  const getElementByVal = (id) => {
    return document.getElementById(id).nodeValue;

  };


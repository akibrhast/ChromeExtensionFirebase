
chrome.storage.sync.get(['Myingredients'], function(result){
    console.log(result.Myingredients)
    document.getElementsByTagName("p")[0].innerHTML = result.Myingredients

})
var config = {
    apiKey: "AIzaSyAuUl56VMsf_68SFUjgdf4p1sA49fGxmkw",
    authDomain: "[insert auth domain]",
    databaseURL: "https://meal-planning-47de5.firebaseio.com",
    projectId: "meal-planning-47de5",
    storageBucket: "meal-planning-47de5.appspot.com",
    messagingSenderId: "743171092090-m89ntaucikv70rhqfe0cuq457hj6hr3o.apps.googleusercontent.com"
  };
  
firebase.initializeApp(config);
  
var db = firebase.firestore()

function addtoFireBase(){
    value = document.getElementById("myText").value
    
    db.collection("users").add({
        items: value,

    })
    .then(function(docRef) {
        console.log("Document written with  popup.js: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

}



addRecipie = document.getElementById("addRecipie");
addRecipie.onclick = function(){addtoFireBase()}


/*
addRecipie.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'storeCookie.js'});
    });
};

*/
/*
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'getAllCookie.js'});
});
*/

/*
chrome.runtime.onConnect.addListener(function(port) {
    //console.assert(port.name == "minicmcpolojipabfpdbgkjfighihghc");
    port.onMessage.addListener(function(msg) {

        for (i in msg.interestCookieArray) {
            
            document.getElementsByTagName("p")[0].innerHTML += i + " : <a href="  + msg.interestCookieArray[i][0]+">"+msg.interestCookieArray[i][1] +"</a>" + "<br>"; 
        }



      
    });
  });
*/
/*

  chrome.runtime.onConnect.addListener(function(port) {
    //console.assert(port.name == "cookieadded");
    port.onMessage.addListener(function(msg) {

        mqtt(msg.url)



      
    });
  });
*/

/*
######################STACKOVERFLOW PAGE ON HOW TO GET A THUMBNAIL FROM A YOUTUBE VIDEO, GIVEN ITS ID####################################33

https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
*/ 
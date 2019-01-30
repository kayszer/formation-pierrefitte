var d = new Date();
var userName = "";
var userBirthday = "";
var test = "";
var userImage = "";
// var userBirthdayDate = new Date(userBirthday);
var myUsers = [{
        image: '<img src="https://static.weezbe.com/planetbonbons/Images/products/p_566G_180709182001.png" alt=""><br>',
        name: "Marie",
        birthday: "1988-10-12"
    },
    {
        image: '<img src="https://lezebre.lu/images/detailed/29/juventus-logo.png" alt=""><br> ',
        name: "Laurent",
        birthday: "1975-01-03"
    },
    {
        image: '<img src="http://www.footcenter.fr/media/catalog/category/calage-logo-manchester-city.png" alt="" ><br>',
        name: "Rositta",
        birthday: "1961-03-04"
    },
    {
        image: '<img src="http://www.color-stickers.com/2121-large_default/stickers-logo-foot-fc-bayern-de-munich.jpg" alt="" ><br>',
        name: "Philippine",
        birthday: "1969-01-28"
    }
];

function envoie() {
    userName = document.getElementById("name").value;
    userBirthday = document.getElementById("birthday").value;
    myUsers.push({
        name: userName,
        birthday: userBirthday
    });
    alert('pushed');
    for (i = 0; i < myUsers.length; i++) {
        test += myUsers[i].name + '<br>' + myUsers[i].birthday + '<br>' + myUsers[i].image;
        document.getElementById('my_users').innerHTML = test;
    }
}
console.log(myUsers)
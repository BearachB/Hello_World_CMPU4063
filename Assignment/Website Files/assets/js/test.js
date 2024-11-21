
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function fypDownloadClick() {
    var txt;
    alert("Congratulations! You are probably the first person outside of me and my project supervisor to read this!");
}
function cvDownloadClick() {
    var txt;
    alert("Thanks for downloading my CV!");
}

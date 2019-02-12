window.onload = function () {
    var logos = document.getElementsByClassName("logo-to-get");
    manageLogos();
    function manageLogos() {
        for (var i = 0; i < logos.length; i++) {
            logos[i].onClick(getLogo);
        }
    }

    function getLogo() {
        document.getElementById("response").innerHTML = this.src;
    }





}
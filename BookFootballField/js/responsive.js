function menuFunction() {
    var x = document.getElementById("idMenuHeader");
    if (x.className === "menuHeader") {
        x.className += " responsive";
    } else {
        x.className = "menuHeader";
    }
}
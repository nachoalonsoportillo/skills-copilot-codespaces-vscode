function skillsMember(){
    var member = document.getElementById("skillsMember");
    var display = member.style.display;
    if (display == "none") {
        member.style.display = "block";
    } else {
        member.style.display = "none";
    }
}
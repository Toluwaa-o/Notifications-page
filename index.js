let marker = document.getElementById("allbtn");
let unread = document.getElementsByClassName("unread");
let stats = document.getElementById("stat");
let dots = document.querySelectorAll(".dot");
let notifs = document.querySelectorAll(".notif");
stats.textContent = unread.length

for(let i = 0; i < notifs.length; i++){
    notifs[i].addEventListener("click", function(){
        notifs[i].classList.remove("unread");
        dots[i].style.display = "none";
        reCount()
    })
}

marker.addEventListener("click", function(e) {
    e.preventDefault();
    for(let i = 0; i < notifs.length; i++) {
        notifs[i].classList.remove("unread");
        dots[i].style.display = "none";
        reCount()
    }
})

function reCount(){
    stats.textContent = unread.length
    if(unread.length === 0){
        stats.style.display = "none"
    }
}

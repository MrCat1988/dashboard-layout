let navlist = document.getElementById("nav-list");
console.log(navlist);
let items = navlist.getElementsByClassName("nav-item");
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function (){
        let current = document.querySelectorAll('.active');
        current.forEach(element => {
            element.classList.remove("active");
        });
        this.classList.add("active");
    });
}
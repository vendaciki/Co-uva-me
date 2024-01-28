function SidebarSearch() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

/*
function ukazRecept() {
    document.getElementById("recept").style.display = "";
    document.getElementById("ingredience").style.display = "";
    document.getElementById("postup").style.display = "";  
    document.getElementById("hodnoty").style.display = "";
}             

function schovRecept() {
    document.getElementById("recept").innerHTML = "";
    document.getElementById("ingredience").innerHTML = "";
    document.getElementById("postup").innerHTML = "";
}        */  


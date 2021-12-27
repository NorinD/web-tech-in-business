function getMore() {
    const phone = document.getElementById("content_image__wrapper");

    phone.style.flex = "1 1 50%"
}

function hightlightNeedings() {
    const item1 = document.getElementById("item1");
    const item2 = document.getElementById("item2");
    const item3 = document.getElementById("item3");

    item1.classList.add("border-bottom");
    item2.classList.add("border-bottom");
    item3.classList.add("border-bottom");
}
function fifthchange(tile) {

    for (i = 1; i < 4; i++) {
        if (tile == i) {
            document.getElementById("fifth-" + i).style.display = "block"
            document.getElementById("button-" + i).classList.add("button-active")
        } else {
            document.getElementById("fifth-" + i).style.display = "none"
            document.getElementById("button-" + i).classList.remove("button-active")
        }
    }

}
fifthchange(1)



for (i = 0; i < 4; i++) {
    document.getElementsByClassName("faq-heading")[i].addEventListener("click", (e) => {
        console.log(e.target.attributes[0].value)
        faq(e.target.attributes[0].value)
    })
}


function faq(x) {
    for (i = 1; i < 5; i++) {
        if (i == x) {
            if (document.getElementById("des-" + i).classList.contains("faq-description-block")) {
                document.getElementById("des-" + i).classList.add("faq-description-none")
                document.getElementById("des-" + i).classList.remove("faq-description-block")
            } else {
                document.getElementById("des-" + i).classList.add("faq-description-block")
            }
        } else {
            document.getElementById("des-" + i).classList.add("faq-description-none")
            document.getElementById("des-" + i).classList.remove("faq-description-block")

        }

    }
}

faq(0)



window.onload = () => {

    let qr = document.getElementById("qr");

    document.getElementById("date").addEventListener("change", (event) => {
        let input = event.target.value;
        checkDate(qr, input);
    });
}

const checkDate = (qr, input) => {
    if(input == "2081-10-15"){
        qr.style.visibility = "visible";
    }
}
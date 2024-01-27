window.onload = () => {

    let correct = document.getElementById("correct");
    let mainContent = document.getElementById("mainContainer");

    document.getElementById("math").addEventListener("input", (event) => {
        let input = event.target.value;
        checkAns(correct, mainContent, input);
    });
}

const checkAns = (correct, mainContent, input) => {
    if(input == "11"){
        mainContent.style.visibility = "hidden";
        correct.innerHTML = "Yes it's 11 INCHES";
        const fiveSeconds = setTimeout(() => {
            mainContent.style.height = 0;
            correct.innerHTML = "Now hurry, seize the gear, to the second floor's even spaces near, In a jiffy, like a hat's fall, let's make our way through the hall.";
        }, 1000);
    }
}

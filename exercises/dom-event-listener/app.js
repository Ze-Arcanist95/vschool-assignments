const tBox = document.querySelector("#technoBox");

    tBox.addEventListener('mouseover', () => {
        tBox.style.backgroundColor = "blue"
    });
    tBox.addEventListener('mousedown', () => {
        tBox.style.backgroundColor = "red"
    });
    tBox.addEventListener('mouseup', () => {
        tBox.style.backgroundColor = "yellow"
    });
    tBox.addEventListener('dblclick', () => {
        tBox.style.backgroundColor = "green"
    });
    tBox.addEventListener('scroll', () => {
        tBox.style.backgroundColor = "orange"
    });

    tBox.addEventListener("keydown", (event) => {
        switch(event.key){
            case 'r':
                tBox.style.backgroundColor = "red";
                break;
            case 'b':
                tBox.style.backgroundColor = "blue";
                break;
            case 'y':
                tBox.style.backgroundColor = "yellow";
                break;
            case 'g':
                tBox.style.backgroundColor = "green";
                break;
            case 'o':
                tBox.style.backgroundColor = "orange";
                break;
        }
    });

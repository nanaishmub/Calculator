// your logic here
document.addEventListener("DOMContentLoaded", () => {
    /*const table = document.getElementById("calcu")*/
   

    function displayValues() {
        const buttons = document.querySelectorAll("#calcu input[type='button']");
        const result = document.getElementById("result");
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const value = button.value;

                if (value ==="c"){
                    result.value = "";
                } else{
                    result.value += value;
                }
            })
        })
    }

    function performOperations() {
        const buttons = document.getElementsByClassName("operations");
        const result = document.getElementById("result");
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const value = button.value;
        
                    if (value === "+"){
                        result.value = value + value;
                    } else if(value === "-"){
                        result.value = value - value;
                    } else if(value === "*"){
                      result.value = value * value;
                    } else if(value === "/"){
                        if ()
                        result.value = value / value;
                    } else if(value === "-"){
                        result.value = value - value;
                    }
                }
            })
        })

    }


    displayValues();
    //performOperations();
})
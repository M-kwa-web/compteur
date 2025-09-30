        let hour = 0, min =0, second =0;
        let timer = null;
        const secondDiv = document.getElementById("second");
        const minDiv = document.getElementById("minut");
        const hourDiv = document.getElementById("hour");
        const beep = document.getElementById("beep");

        const updateDisplay = () =>{secondDiv.textContent = String(second).padStart(2,0); minDiv.textContent = String(min).padStart(2,0); hourDiv.textContent = String(hour).padStart(2,0)}

        const tick = () => {
            second++;
            if(second>=60){
                second = 0;
                min++;
            }
            if(min>=60){
                min = 0;
                hour++;
            }
            if(second ===59){
                beep.play();
            }
            updateDisplay();
        }

        const start = () =>{
            !timer ? timer = setInterval(tick,1000) : null;
        }
 
        const stop = () => {timer ? clearInterval(timer):null }
 
        const reset = () => {hour = 0; min = 0; second = 0; updateDisplay(); stop()}
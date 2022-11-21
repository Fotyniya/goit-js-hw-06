const counter = function(){
    const btnsEl = document.querySelectorAll('button');

    btnsEl.forEach(btn => {
        btn.addEventListener('click', function(){
            const action = this.dataset.action;
            const value = this.parentElement.querySelector('#value');
            const currentValue = value.textContent;
            
            let counterValue = 0;
    
            if (action === "increment"){
                counterValue = Number(currentValue) + 1;
            } else {
                counterValue = currentValue > 0 ? currentValue - 1 : 0;
            }
            value.textContent = counterValue;
        })
    })
}
counter();



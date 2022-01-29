function attachGradientEvents() {
    let boxElement = document.getElementById('gradient');

    boxElement.addEventListener('mousemove', gradientMove)
    boxElement.addEventListener('mouseout',gradientOut)

    function gradientMove(event){
        let parcent = event.offsetX / (event.target.clientWidth -1);
        parcent = Math.trunc(parcent*100);

        document.getElementById('result').textContent = `${parcent}%`;
       
    }

    function gradientOut(event){
        document.getElementById('result').textContent = '';
    }
}
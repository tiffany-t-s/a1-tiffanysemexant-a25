(function () {
    const rect = document.getElementById("rectangle");

    if (!rect){
        console.log('Not found');
        return;
    }
    let id = null;
    let pos = 0;
    clearInterval (id);
    id = setInterval(animate, 5);
    function animate() {
        if (pos == 550){
            clearInterval(id);
        }
        else{
            pos++;
            rect.style.top = pos + 'px';
        }
    }
})();
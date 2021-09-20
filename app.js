document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode('add square');
    button.className = 'button';
    button.appendChild(btnText);
    document.body.appendChild(button);
    let id = 0;
        
    button.addEventListener('click', buttonClick);
    function buttonClick() {
        id++;     
        let square = document.createElement('div');
        square.className = 'square';
        square.style.width = 30px;
        square.style.height = 30px;
        square.style.color = purple;
        document.body.appendChild(square);
    }
   
});


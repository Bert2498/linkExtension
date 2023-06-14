const contextMenu = document.querySelector(".wrapper");
saveMenu = contextMenu.querySelector(".saveMenu");

document.addEventListener("contextmenu", e =>{
    e.preventDefault(); //prevent the use of the default menu
    let x = e.offsetX, y = e.offsetY; //setting the position of x and y
    //setting for width and height so when you click to close to the edges
    //you dont lose the menu
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    cmHeight = contextMenu.offsetHeight;
    cmWidth = contextMenu.offsetWidth;

    if(x > (winWidth - cmWidth - saveMenu.offsetWidth)){
        saveMenu.style.left = "-200px";
    } else {
        saveMenu.style.left = "";
        saveMenu.style.right = "-200px";
    } //if it is too for to the right, move menu to the left


    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;
    contextMenu.style.left = `${x}px`; //you have to use the backtick which is on the left side on 1
    contextMenu.style.top = `${y}px`; //set y to the top so its next to the mouse
    contextMenu.style.visibility = "visible"; //show the custom menu when the right button is pressed
});

document.addEventListener("click", () => contextMenu.style.visibility = "hidden");
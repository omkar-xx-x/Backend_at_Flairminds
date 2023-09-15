function resizeFunction(){
    var iHeight = window.innerHeight;
    console.log("The inner height of the browser is", iHeight);
    
    var iWidth = window.innerWidth;
    console.log("The inner width of the browser is ",iWidth);
    
    var oHeight = window.outerHeight;
    console.log("The outer height of the browser is", oHeight);
    
    var oWidth = window.outerWidth;
    console.log("The outer width of the browser is ",oWidth);
}

var myWindow;

function openWindow(){
    myWindow = window.open('','','width = 500 , height = 200');
}
// function closeWindow(){
//     myWindow.close();
// }

// function moveWindow(){
//     myWindow.moveTo(100 , 100);
// }

function resizeWindow(){
    myWindow.resizeTo(400 , 400);
}

function scrollWindow(){
    window.scrollBy(200 , 20);
}
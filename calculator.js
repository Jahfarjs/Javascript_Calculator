let screen = document.getElementById('screen')

function btnclick(value){
    screen.value += value;
}
function clrscrn(value){
    screen.value = "";
}

function operation(value){
   try{
    let result = eval(screen.value); 
    screen.value = result;
    }
    catch(error){
        screen.value = 'error';
    }
}

function clearOne(value){
    let onscreen = document.getElementById("screen").value;
    document.getElementById("screen").value = onscreen.slice(0,-1);
}


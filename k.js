var indexPage = 1;
window.addEventListener("load", handleOnLoad);
function handleOnLoad(e){
    document.getElementById("bar-radio-"+indexPage).checked = true;
}
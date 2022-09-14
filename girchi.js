let copytext = document.querySelector(".copy");
copytext.querySelector("button").addEventListener("click", function(){
    let input = copytext.querySelector("input.text");
    input.ariaSelected();
    document.execCommand("copy");
    copytext.classList.add("active");
    window.getSelection().removeAllRanges();
    
})
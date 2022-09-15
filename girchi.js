// let copytext = document.querySelector(".copy");
// copytext.querySelector("button").addEventListener("click", function(){
//     let input = copytext.querySelector("input.text");
//     input.ariaSelected();
//     document.execCommand("copy");
//     copytext.classList.add("active");
//     window.getSelection().removeAllRanges();
    
// })
    let cond = document.getElementById('name');
    function isEmpty(cond){
        return (cond === undefined || cond == null || cond.length <= 0) ? true : false;
    };
    console.log(cond)

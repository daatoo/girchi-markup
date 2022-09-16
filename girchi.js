// let copytext = document.querySelector(".copy");
// copytext.querySelector("button").addEventListener("click", function(){
//     let input = copytext.querySelector("input.text");
//     input.ariaSelected();
//     document.execCommand("copy");
//     copytext.classList.add("active");
//     window.getSelection().removeAllRanges();
    
// })
    // let cond = document.getElementById('name');
    // function isEmpty(cond){
    //     return (cond === undefined || cond == null || cond.length <= 0) ? true : false;
    // };
    // console.log(cond)

    // console.log("hello");
    // document.body.style.backgroundColor= "red";




var div  = document.getElementById("divv");
var copytext_icon  = document.getElementById("copytext-icon");

var span  = document.getElementById("copyedtext");
div.onclick = function() {
    document.execCommand("copy");
  }
  
  div.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", span.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });



  copytext_icon.onclick = function() {
    document.execCommand("copy");
  }
  
  copytext_icon.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", span.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });


var gadaricxva_div = document.getElementById("gadaricxvis-danishnuleba");
var textarea = document.getElementById("textarea");
gadaricxva_div.onclick = function(){
    if(textarea.className == "w-[490px] h-[72px] flex  flex-col justify-between items-center pl-[12px] pt-[6px] pb-[6px] pr-[12px] gap-[8px] border-solid border-[1px] border-[#000000] rounded-[6px]"){
        textarea.className = "hidden ";
    }else{
        textarea.className = "w-[490px] h-[72px] flex  flex-col justify-between items-center pl-[12px] pt-[6px] pb-[6px] pr-[12px] gap-[8px] border-solid border-[1px] border-[#000000] rounded-[6px]";
    }
}







var sell = document.getElementById("sell");
var price = document.getElementById("price");
var itemname = document.getElementById("item-name");
var buy = document.getElementById("buy");
var donate = document.getElementById("donate");
var sell_div_text = document.getElementById("sell-div-text");
var buy_div_text = document.getElementById("buy-div-text");
var donate_div_text = document.getElementById("donate-div-text")
sell.onclick = function(){

    sell_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
    buy_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#1A8917]  cursor-pointer";
    donate_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
    price.className = "flex justify-between items-center p-[10px] gap-[8px] bg-[#FFFFFF] border-solid border-[1px] border-[#E0E2E7] rounded-[6px] w-[490px] h-[44px] box-border flex-row mt-[20px] placeholder:font-[500] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#727A82]";
    itemname.className = "hidden"
}
buy.onclick = function(){
    sell_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#1A8917] cursor-pointer";
    buy_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
    donate_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";

    itemname.className = "flex justify-between items-center p-[10px] gap-[8px] bg-[#FFFFFF] border-solid border-[1px] border-[#E0E2E7] rounded-[6px] w-[490px] h-[44px] box-border flex-row mt-[20px] placeholder:font-[500] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#727A82]";
    price.className = "hidden"
}
donate.onclick = function(){
    sell_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
    buy_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82]  cursor-pointer";
    donate_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#1A8917] cursor-pointer";
    price.className = "hidden";
    itemname.className = "hidden";

}
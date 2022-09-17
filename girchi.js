// copy link by click
var div  = document.getElementById("copytext-div");
var copytext = document.getElementById("copytext");
var checkmark_icon = document.getElementById("checkmark-icon");
var copytext_icon = document.getElementById("copytext-icon");
function copylink() {
    const text = document.getElementById('copyedtext').innerText;

    navigator.clipboard.writeText(text);
    copytext.innerText = "გადაკოპირდა";
    setTimeout(() => {
        copytext.innerText = "გადაკოპირება";
    },1500);
    checkmark_icon.style.display = "flex";
    copytext_icon.style.display = "none";

};







//show textarea by clicking transfer purpose div
var gadaricxva_div = document.getElementById("gadaricxvis-danishnuleba");
var textarea = document.getElementById("textarea");
gadaricxva_div.onclick = function(){
    if(textarea.className == "w-[490px] h-[72px] flex  flex-col justify-between items-center pl-[12px] pt-[6px] pb-[6px] pr-[12px] gap-[8px] border-solid border-[1px] border-[#000000] rounded-[6px]"){
        textarea.className = "hidden ";
    }else{
        textarea.className = "w-[490px] h-[72px] flex  flex-col justify-between items-center pl-[12px] pt-[6px] pb-[6px] pr-[12px] gap-[8px] border-solid border-[1px] border-[#000000] rounded-[6px]";
    }
}






//choose transfer aim (buy, sell or donate)
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
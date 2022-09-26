// copy link by click
var div  = document.getElementById("copytext-div");
var copytext = document.getElementById("copytext");
var checkmark_icon = document.getElementById("checkmark-icon");
var copytext_icon = document.getElementById("copytext-icon");
var span = document.getElementById("span");
function copylink() {
    const text = document.getElementById('copyedtext').innerText;

    navigator.clipboard.writeText(text);
    copytext.innerText = "გადაკოპირდა";
    setTimeout(() => {
        copytext.innerText = "გადაკოპირება";
    },1500);
    checkmark_icon.style.display = "flex";
    span.className = "invisible group-hover:visible  absolute text-white  rounded-[4px] bg-[#292d33e6] px-2 py-1 translate-x-[-50%] ml-[7px] translate-y-[-39px]"
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
var donate_div_text = document.getElementById("donate-div-text");
sell.onclick = function(){

    sell_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
    buy_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#1A8917]  cursor-pointer";
    donate_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
    price.className = "relative";
    itemname.className = "hidden"
}
buy.onclick = function(){
    sell_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#1A8917] cursor-pointer";
    buy_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
    donate_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";

    itemname.className = "relative";
    price.className = "hidden";
}
donate.onclick = function(){
    sell_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
    buy_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82]  cursor-pointer";
    donate_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#1A8917] cursor-pointer";
    price.className = "hidden";
    itemname.className = "hidden";

}


//checkbox clicked event 
var checkbox = document.getElementById("checkbox");
var next = document.getElementById("next");
var next_p_tag = document.getElementById("next-p-tag");
var next_icon = document.getElementById("next-icon");
var check = document.getElementById("check");

function onclickevent(checkbox) {
    if(checkbox.checked){
        next.style.backgroundColor = "#1A8917";
        next_p_tag.style.color = "white";
        next_icon.style.color = "white";
        check.className = "fa-solid fa-check absolute text-[10px] text-white  left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] ";
    }
    else{
        next.style.backgroundColor = "#727a8229";
        next_p_tag.style.color = "#727A82";
        next_icon.style.color = "#727A82";
        check.className = "hidden z-1";

    }
}

var page_1 = document.getElementById("page-1");
var page_2 = document.getElementById("page-2");
var page_3 = document.getElementById("page-3");
function page_1_click(){
    page_1.style.display = "none";
    page_2.style.display = "flex";
    page_3.style.display = "none";
}
function page_2_click(){
    page_1.style.display = "none";
    page_2.style.display = "none";
    page_3.style.display = "flex";
}
function page_3_click(){
    page_1.style.display = "flex";
    page_2.style.display = "none";
    page_3.style.display = "none";
}

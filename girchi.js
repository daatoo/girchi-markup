//suggestions 
const search = document.getElementById('search');
const search2 = document.querySelector(".search");
const matchList = document.getElementById('match-list');
const body = document.body;
const matchList_ = document.getElementById("matchList-div");
const fax = document.getElementById("fax");



const searchStates = async searchText => {
    async function searchTextt() {
        const res = await fetch('index.json');
        const states = await res.json();
        return states;
      }

      
      searchTextt().then(states => {
        states; // fetched
        var matches = states.filter(state =>{
            const regex = new RegExp(`^${searchText}`, 'gi');
            if(searchText != state.name.match(regex)){
                matchList.innerHTML = '';
                
            }
            return state.name.match(regex) || state.abbr.match(regex);

        })
        if(searchText.length === 0){
            matches = [];

            matchList.innerHTML = '';
        }
        outputhtml(matches);
      });
}

//show results in html
const outputhtml = matches => {
if(matches.length > 0){
        const html = matches.map(match => `
        
        <div id="${match.name}" onclick="clicking(this.id);"  class="flex flex-row items-center px-[12px] py-[8px] gap-3 w-full min-h-[68px]  rounded-[4px] cursor-pointer  "   >
            <img class="w-10 h-10"
             src="images/profile-picture.png">
            <div class="flex flex-col">
                <h4 id="${match.capital}" class="font-normal text-[14px] leading-6 text-[#292D33] ">${match.name}  </h4>
                <div class="flex h-5 w-full justify-center items-center">
                    <p class="font-medium text-[12px] leading-6 text-lightGray ">პ.ნ 4000*******</p>
                    <p class="text-lightGray">.</p>
                    <p  class="font-medium text-[12px] leading-5 text-lightGray ">ID: 433281</p>
                </div>
            </div>
        </div>

        `).join('');
        
    matchList.style.display = "flex";
        matchList.innerHTML = html;
        
    }else if(matches.length === 0){
        matchList.style.display = "none";

    }

}
search.addEventListener('input', () => searchStates(search.value));


const choosen = document.getElementById("choosen");

// remove suggestions' div display if clicked outside of search
window.addEventListener('click', function(e){   
    if (document.getElementById('search').contains(e.target) ){
      // Clicked in box
      document.getElementById("matchList-div").style.display = "flex";

    }
   else if(document.getElementById('matchList-div').contains(e.target)){ 
        document.getElementById("matchList-div").style.display = "none";

    }
    else{
      // Clicked outside the box
      document.getElementById("matchList-div").style.display = "none";

    }
});

//  set varialbes for choosen  search suggestions
let choosen_div = document.getElementById("choosen-div");
let matchList_div = document.getElementById("matchList-div");
function clicking(clicked_id){
    var b= clicked_id;
    let menu = document.getElementById(b);
    let children = menu.children[1].firstChild.nextSibling.innerText;
    var chose = document.getElementById("chose").innerText = children;
    document.getElementById("matchList-div").style.display = "none";
    choosen_div.className = "bg-[#292d330a] flex-row items-center justify-between px-[12px] py-[8px] gap-3 w-full min-h-[68px] rounded-[4px] cursor-pointer flex";
    search.value = b
}

matchList_div.onclick = function(){
    document.getElementById("page-1-button").className = "cursor-pointer flex justify-center ml-auto items-center py-2 px-4 gap-1 w-[111px] h-10 bg-secondaryGreen rounded-[32px]";
    document.getElementById("next-btText").className = "text-white font-medium text-sm leading-6 tracking-[0.02em]"
    document.getElementById("next-icon").className = "fa-solid fa-chevron-right text-white text-[10px] font-bold "
}
let remove_button = document.getElementById("remove_button")
remove_button.onclick = function() {
    document.getElementById("choosen-div").className = "bg-[#292d330a] flex-row items-center justify-between px-[12px] py-[8px] gap-3 w-full min-h-[68px] rounded-[4px] cursor-pointer hidden";
    document.getElementById("page-1-button").className = "cursor-pointer flex justify-center ml-auto items-center py-2 px-4 gap-1 w-[111px] h-10 bg-[#727a8229]  rounded-[32px]";
    document.getElementById("next-btText").className = "text-lightGray font-medium text-sm leading-6 tracking-[0.02em]"
    document.getElementById("next-icon").className = "fa-solid fa-chevron-right text-lightGray text-[10px] font-bold "
    search.value = ""
}

// end suggestions


// copy link
let div  = document.getElementById("copytext-div");
let copytext = document.getElementById("copytext");
let checkmark_icon = document.getElementById("checkmark-icon");
let copytext_icon = document.getElementById("copytext-icon");
let span = document.getElementById("span");
document.querySelector("#copytext-div").addEventListener("click", function(){
    const text = document.getElementById('copyedtext').innerText;

    navigator.clipboard.writeText(text);
    copytext.innerText = "გადაკოპირდა";
    setTimeout(() => {
        copytext.innerText = "გადაკოპირება";
    },1500);
    checkmark_icon.style.display = "flex";
    span.className = "invisible group-hover:visible  absolute text-white  rounded-[4px] bg-[#292d33e6] px-2 py-1 translate-x-[-50%] ml-[7px] translate-y-[-39px]"
    copytext_icon.style.display = "none";
})


//go to second step validation
let page_1 = document.getElementById("page-1")
let page_2 = document.getElementById("page-2")
let page_3 = document.getElementById("page-3")

document.querySelector("#page-1-button").addEventListener("click", function(){

    if(choosen_div.className == "bg-[#292d330a] flex-row items-center justify-between px-[12px] py-[8px] gap-3 w-full min-h-[68px] rounded-[4px] cursor-pointer flex"){
        page_1.style.display = "none";
        page_2.style.display = "flex";
        page_3.style.display = "none";
        search.className = "search flex w-full justify-between items-center p-[10px] gap-[8px] bg-white border-solid  border-bgGray rounded-md h-11 placeholder:font-medium placeholder:text-sm placeholder:leading-4"
    }else{
        search.className = "search flex w-full justify-between items-center p-[10px] gap-[8px] bg-white border-solid border-[1px] border-red-500 rounded-md h-11 placeholder:font-medium placeholder:text-sm placeholder:leading-4"
    }
})


//step 2 inputs

let numOfGeds_input = document.getElementById("num-of-geds")
let price_input = document.getElementById("price-input")
let next_button = document.getElementById("next-instep2")
let next_p_tag = document.getElementById("next-p-tag")
let checkbox = document.getElementById("checkbox")
let next_icon1 = document.getElementById("next-icon1");
let next_icon2 = document.getElementById("next-icon2");


document.querySelector(".page_2").addEventListener("input", function(e){
    e.target.value = e.target.value.replace(/[^0-9]/g,'');




    if(numOfGeds_input.value && price_input.value && checkbox.className == "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer bg-secondaryGreen"){
        next_button.className = " cursor-pointer flex justify-center items-center   gap-1 w-[111px] h-10 bg-secondaryGreen   rounded-[32px]"
        next_p_tag.className = "text-white font-medium text-sm leading-6 tracking-[0.02em]"
        next_icon2.className = "fa-solid fa-chevron-right text-white text-[10px] font-bold "

    }
    if(!numOfGeds_input.value || !price_input.value || checkbox.className !== "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer bg-secondaryGreen"){
        next_button.className = " cursor-pointer flex justify-center items-center   gap-1 w-[111px] h-10 bg-[#727a8229]   rounded-[32px]"
        next_p_tag.className = "text-lightGray font-medium text-sm leading-6 tracking-[0.02em]"
        next_icon2.className = "fa-solid fa-chevron-right text-lightGray text-[10px] font-bold"

    }
})

//show textarea by clicking transfer purpose div
let transfer_div = document.getElementById("transfer-aim");
let textarea = document.getElementById("textarea");
document.querySelector("#transfer-aim").addEventListener("click", function(){
    if(textarea.className == "w-[490px] h-[72px] flex  flex-col justify-between items-center pl-[12px] pt-[6px] pb-[6px] pr-[12px] gap-[8px] border-solid border-[1px] border-[#000000] rounded-[6px]"){
        textarea.className = "hidden ";
    }else{
        textarea.className = "w-[490px] h-[72px] flex  flex-col justify-between items-center pl-[12px] pt-[6px] pb-[6px] pr-[12px] gap-[8px] border-solid border-[1px] border-[#000000] rounded-[6px]";
    }
})



//checkbox clicked event 
document.querySelector("#checkbox").addEventListener("click", function(){
    if(checkbox.checked){
        checkbox.className = "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer bg-secondaryGreen"
        check.className = "fa-solid fa-check absolute text-[10px] text-white  left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] z-1";
    }else{
        check.className = "hidden z-1";
        checkbox.className = "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer"
    }
   
})



//choose transfer aim (buy, sell or donate)
let sell = document.getElementById("sell");
let price = document.getElementById("price");
let itemname = document.getElementById("item-name");
let buy = document.getElementById("buy");
let donate = document.getElementById("donate");
let sell_div_text = document.getElementById("sell-div-text");
let buy_div_text = document.getElementById("buy-div-text");
let donate_div_text = document.getElementById("donate-div-text");
let itemName_input = document.getElementById("itemName-input");

sell.onclick = function(){

    sell_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
    buy_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#1A8917]  cursor-pointer";
    donate_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
    price.className = "relative";
    itemname.className = "hidden";
    itemName_input.value = "";
    price_input.setAttribute('required', '')
    itemName_input.removeAttribute('required')
    itemName_input.style.border = ""


}
buy.onclick = function(){
    sell_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#1A8917] cursor-pointer";
    buy_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
    donate_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
    price_input.value = "";
    itemname.className = "relative";
    price.className = "hidden";
    itemName_input.setAttribute('required', '')
    price_input.removeAttribute('required')
    price_input.style.border = ""

}
donate.onclick = function(){
    sell_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
    buy_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82]  cursor-pointer";
    donate_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#1A8917] cursor-pointer";
    price_input.value = "";
    price.className = "hidden";
    itemname.className = "hidden";
    itemName_input.value = "";
    price_input.removeAttribute('required')
    itemName_input.removeAttribute('required')
    price_input.style.border = ""
    itemName_input.style.border = ""


}




// go to third step validation

document.querySelector("#next-instep2").addEventListener("click", function(){
    if(price_input.required && !price_input.value){
        price_input.style.border = "1px solid red"
    }
    if(itemName_input.required && !itemName_input.value){
        itemName_input.style.border = "1px solid red"
    }
    if(itemName_input.value){
        numOfGeds_input.style.border = ""
    }
    if(!numOfGeds_input.value){
        numOfGeds_input.style.border = "1px solid red"
    }
    if(price_input.value || !price_input.required){
        price_input.style.border = ""
    }
    if(numOfGeds_input.value){
        numOfGeds_input.style.border = ""
    }
    if(checkbox.className !== "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer bg-secondaryGreen"){
        checkbox.className = "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-red-500 cursor-pointer "
    }
    if(itemName_input.required || price_input.required){
        if((price_input.value || itemName_input.value) && numOfGeds_input.value && checkbox.className == "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer bg-secondaryGreen"){
            page_1.style.display = "none";
            page_2.style.display = "none";
            page_3.style.display = "flex";
        }
    }else if(!itemName_input.required && !price_input.required){
        if(numOfGeds_input.value && checkbox.className == "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer bg-secondaryGreen"){
            page_1.style.display = "none";
            page_2.style.display = "none";
            page_3.style.display = "flex";
        }
    }
})

//go back to second step from third step

function page_3_goBack(){
    page_1.style.display = "none";
    page_2.style.display = "flex";
    page_3.style.display = "none";
}




// step 3 email code input
let fakeInput1 = document.getElementById("fakeInput1")
let fakeInput2 = document.getElementById("fakeInput2")
let fakeInput3 = document.getElementById("fakeInput3")
let fakeInput4 = document.getElementById("fakeInput4")
let fakeInput5 = document.getElementById("fakeInput5")
let fakeInput6 = document.getElementById("fakeInput6")
let real_input = document.getElementsByClassName("real-input") ;

// Listen on the 'input' event inside the .digits area:
document.querySelector(".digits").addEventListener("input", function(e){
    // Exclude non-numeric characters from input:
    e.target.value = e.target.value.replace(/[^0-9]/g,'');
    
    // If the input value is filled and there is a neighbouring element that is input, then focus on that element:
    if ( e.target.value !== "" && e.target.nextElementSibling && e.target.nextElementSibling.nodeName === "INPUT" ){
    
      e.target.nextElementSibling.focus();
    
    }
    
    e.target.onkeydown = function() {
      const key = event.key;
      if (key === "Backspace") {
        if(e.target.value == ""){
            e.target.previousElementSibling.focus();
        }
      }
    }
    
    
    
    if(fakeInput1.value !== "" && fakeInput2.value !== "" && fakeInput3.value !== "" && fakeInput4.value !== "" && fakeInput5.value !== "" && fakeInput6.value !== ""){
        real_input = fakeInput1.value + fakeInput2.value + fakeInput3.value + fakeInput4.value + fakeInput5.value + fakeInput6.value;
        document.getElementById("real-input").value = real_input;
    }
    if(real_input){
        fakeInput1.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
        fakeInput2.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
        fakeInput3.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
        fakeInput4.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
        fakeInput5.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
        fakeInput6.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
    
    }
    if(fakeInput1.value == "" || fakeInput2.value == "" || fakeInput3.value == "" || fakeInput4.value == "" || fakeInput5.value == "" || fakeInput6.value == "" ){
        document.getElementById("page-3-button").className = "cursor-pointer flex flex-row  justify-center items-center gap-[4px] w-[138px] h-[40px] bg-[#727a8229] rounded-[32px] ";
    }
    if(fakeInput1.value !== "" && fakeInput2.value !== "" && fakeInput3.value !== "" && fakeInput4.value !== "" && fakeInput5.value !== "" && fakeInput6.value !== "" ){
        document.getElementById("page-3-button").className = "cursor-pointer flex flex-row  justify-center items-center gap-[4px] w-[138px] h-[40px] bg-secondaryGreen rounded-[32px] "
    }
    

});

document.querySelector(".digits").addEventListener("keydown", function(e){
    e.target.onkeydown = function() {
        const key = event.key;
        if (key === "Backspace") {
          if(e.target.value == ""){
              e.target.previousElementSibling.focus();
          }
        }
      }
    
})




//step 3 sumbit button
document.querySelector('#page-3-button').addEventListener('click', (event) => {

        event.preventDefault();
        if(real_input == 123456) {

            fakeInput1.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput2.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput3.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput4.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput5.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput6.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
            document.getElementById("form").action = "girchi-succeed.html"
            document.querySelector('form').submit();

        } else if(real_input == 123455){

            fakeInput1.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput2.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput3.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput4.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput5.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput6.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
            document.getElementById("form").action = "girchi-fail.html"
            document.querySelector('form').submit();

        }
        else {
            fakeInput1.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-red-500 rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput2.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-red-500 rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput3.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-red-500 rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput4.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-red-500 rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput5.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-red-500 rounded-[6px] font-bold text-base text-[#292D33] "
            fakeInput6.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-red-500 rounded-[6px] font-bold text-base text-[#292D33] "
        }

  }
);
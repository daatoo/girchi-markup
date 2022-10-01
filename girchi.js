
// // transition to next step

// function page_3_goBack(){
//     page_1.style.display = "none";
//     page_2.style.display = "flex";
//     page_3.style.display = "none";
// }





































// //checkbox clicked event 
// function onclickevent(checkbox) {
//     if(checkbox.checked){
//         checkbox.className = "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer bg-secondaryGreen"
//         check.className = "fa-solid fa-check absolute text-[10px] text-white  left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] z-1";
//     }else{
//         check.className = "hidden z-1";
//         checkbox.className = "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer"
//     }
   
// }



// next page
// var page_1 = document.getElementById("page-1");
// var page_2 = document.getElementById("page-2");
// var page_3 = document.getElementById("page-3");
// function page_1_click(){

//     if(choosen_div.className == "bg-[#292d330a] flex-row items-center justify-between px-[12px] py-[8px] gap-3 w-full min-h-[68px] rounded-[4px] cursor-pointer flex"){
//         page_1.style.display = "none";
//         page_2.style.display = "flex";
//         page_3.style.display = "none";
//         Search.className = "search flex w-full justify-between items-center p-[10px] gap-[8px] bg-white border-solid  border-bgGray rounded-md h-11 placeholder:font-medium placeholder:text-sm placeholder:leading-4"
//     }else{
//         Search.className = "search flex w-full justify-between items-center p-[10px] gap-[8px] bg-white border-solid border-[1px] border-red-500 rounded-md h-11 placeholder:font-medium placeholder:text-sm placeholder:leading-4"
//     }
// }



// // copy link by click
// var div  = document.getElementById("copytext-div");
// var copytext = document.getElementById("copytext");
// var checkmark_icon = document.getElementById("checkmark-icon");
// var copytext_icon = document.getElementById("copytext-icon");
// var span = document.getElementById("span");
// function copylink() {
//     const text = document.getElementById('copyedtext').innerText;

//     navigator.clipboard.writeText(text);
//     copytext.innerText = "გადაკოპირდა";
//     setTimeout(() => {
//         copytext.innerText = "გადაკოპირება";
//     },1500);
//     checkmark_icon.style.display = "flex";
//     span.className = "invisible group-hover:visible  absolute text-white  rounded-[4px] bg-[#292d33e6] px-2 py-1 translate-x-[-50%] ml-[7px] translate-y-[-39px]"
//     copytext_icon.style.display = "none";

// };




// var numOfGeds_input = document.getElementById("num-of-geds")
// var price_input = document.getElementById("price-input")
// var next_button = document.getElementById("next")
// var next_p_tag = document.getElementById("next-p-tag")
// var checkbox = document.getElementById("checkbox")
// var next_icon1 = document.getElementById("next-icon1");
// var next_icon2 = document.getElementById("next-icon2");


// document.querySelector(".page_2").addEventListener("input", function(e){
//     e.target.value = e.target.value.replace(/[^0-9]/g,'');




//     if(numOfGeds_input.value && price_input.value && checkbox.className == "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer bg-secondaryGreen"){
//         next_button.className = " cursor-pointer flex justify-center items-center   gap-1 w-[111px] h-10 bg-secondaryGreen   rounded-[32px]"
//         next_p_tag.className = "text-white font-medium text-sm leading-6 tracking-[0.02em]"
//         next_icon2.className = "fa-solid fa-chevron-right text-white text-[10px] font-bold "

//     }
//     if(!numOfGeds_input.value || !price_input.value || checkbox.className !== "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer bg-secondaryGreen"){
//         next_button.className = " cursor-pointer flex justify-center items-center   gap-1 w-[111px] h-10 bg-[#727a8229]   rounded-[32px]"
//         next_p_tag.className = "text-lightGray font-medium text-sm leading-6 tracking-[0.02em]"
//         next_icon2.className = "fa-solid fa-chevron-right text-lightGray text-[10px] font-bold"

//     }
// })






// //show textarea by clicking transfer purpose div
// var gadaricxva_div = document.getElementById("gadaricxvis-danishnuleba");
// var textarea = document.getElementById("textarea");
// gadaricxva_div.onclick = function(){
//     if(textarea.className == "w-[490px] h-[72px] flex  flex-col justify-between items-center pl-[12px] pt-[6px] pb-[6px] pr-[12px] gap-[8px] border-solid border-[1px] border-[#000000] rounded-[6px]"){
//         textarea.className = "hidden ";
//     }else{
//         textarea.className = "w-[490px] h-[72px] flex  flex-col justify-between items-center pl-[12px] pt-[6px] pb-[6px] pr-[12px] gap-[8px] border-solid border-[1px] border-[#000000] rounded-[6px]";
//     }
// }








// //choose transfer aim (buy, sell or donate)
// var sell = document.getElementById("sell");
// var price = document.getElementById("price");
// var itemname = document.getElementById("item-name");
// var buy = document.getElementById("buy");
// var donate = document.getElementById("donate");
// var sell_div_text = document.getElementById("sell-div-text");
// var buy_div_text = document.getElementById("buy-div-text");
// var donate_div_text = document.getElementById("donate-div-text");
// var price_input = document.getElementById("price-input");
// var itemName_input = document.getElementById("itemName-input");
// if(price_input.required){
//     console.log("required")
// }
// sell.onclick = function(){

//     sell_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
//     buy_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#1A8917]  cursor-pointer";
//     donate_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
//     price.className = "relative";
//     itemname.className = "hidden";
//     itemName_input.value = "";
// }
// buy.onclick = function(){
//     sell_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#1A8917] cursor-pointer";
//     buy_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
//     donate_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
//     price_input.value = "";
//     itemname.className = "relative";
//     price.className = "hidden";
// }
// donate.onclick = function(){
//     sell_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82] cursor-pointer";
//     buy_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#727A82]  cursor-pointer";
//     donate_div_text.className = "font-[500] text-[14px] leading-[24px] text-[#1A8917] cursor-pointer";
//     price_input.value = "";
//     price.className = "hidden";
//     itemname.className = "hidden";
//     itemName_input.value = "";

// }





// function page_2_click(){
//     if(!price_input.value){
//         price_input.style.border = "1px solid red"
//     }
//     if(!numOfGeds_input.value){
//         numOfGeds_input.style.border = "1px solid red"
//     }
//     if(price_input.value){
//         price_input.style.border = ""
//     }
//     if(numOfGeds_input.value){
//         numOfGeds_input.style.border = ""
//     }
//     if(checkbox.className !== "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer bg-secondaryGreen"){
//         checkbox.className = "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-red-500 cursor-pointer "
//     }
//     if(price_input.value && numOfGeds_input.value && checkbox.className == "z-3 flex items-center justify-center appearance-none w-[18px] h-[18px]  border-solid border-2 rounded-[3px] border-[#727a8252] cursor-pointer bg-secondaryGreen"){
//         page_1.style.display = "none";
//         page_2.style.display = "none";
//         page_3.style.display = "flex";
//     }
// }







// // step 3 email code input
// var fakeInput1 = document.getElementById("fakeInput1")
// var fakeInput2 = document.getElementById("fakeInput2")
// var fakeInput3 = document.getElementById("fakeInput3")
// var fakeInput4 = document.getElementById("fakeInput4")
// var fakeInput5 = document.getElementById("fakeInput5")
// var fakeInput6 = document.getElementById("fakeInput6")
// var real_input = document.getElementsByClassName("real-input") ;

// // Listen on the 'input' event inside the .digits area:
// document.querySelector(".digits").addEventListener("input", function(e){
//     // Exclude non-numeric characters from input:
//     e.target.value = e.target.value.replace(/[^0-9]/g,'');
    
//     // If the input value is filled and there is a neighbouring element that is input, then focus on that element:
//     if ( e.target.value !== "" && e.target.nextElementSibling && e.target.nextElementSibling.nodeName === "INPUT" ){
    
//       e.target.nextElementSibling.focus();
    
//     }
    
//     e.target.onkeydown = function() {
//       const key = event.key;
//       if (key === "Backspace") {
//         if(e.target.value == ""){
//             e.target.previousElementSibling.focus();
//         }
//       }
//     }
    
    
    
//     if(fakeInput1.value !== "" && fakeInput2.value !== "" && fakeInput3.value !== "" && fakeInput4.value !== "" && fakeInput5.value !== "" && fakeInput6.value !== ""){
//         real_input = fakeInput1.value + fakeInput2.value + fakeInput3.value + fakeInput4.value + fakeInput5.value + fakeInput6.value;
//         document.getElementById("real-input").value = real_input;
//     }
//     if(real_input){
//         fakeInput1.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
//         fakeInput2.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
//         fakeInput3.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
//         fakeInput4.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
//         fakeInput5.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
//         fakeInput6.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
    
//     }
//     if(fakeInput1.value == "" || fakeInput2.value == "" || fakeInput3.value == "" || fakeInput4.value == "" || fakeInput5.value == "" || fakeInput6.value == "" ){
//         document.getElementById("page-3-button").className = "cursor-pointer flex flex-row  justify-center items-center gap-[4px] w-[138px] h-[40px] bg-[#727a8229] rounded-[32px] ";
//     }
//     if(fakeInput1.value !== "" && fakeInput2.value !== "" && fakeInput3.value !== "" && fakeInput4.value !== "" && fakeInput5.value !== "" && fakeInput6.value !== "" ){
//         document.getElementById("page-3-button").className = "cursor-pointer flex flex-row  justify-center items-center gap-[4px] w-[138px] h-[40px] bg-secondaryGreen rounded-[32px] "
//     }
    

// });

// document.querySelector(".digits").addEventListener("keydown", function(e){
//     e.target.onkeydown = function() {
//         const key = event.key;
//         if (key === "Backspace") {
//           if(e.target.value == ""){
//               e.target.previousElementSibling.focus();
//           }
//         }
//       }
    
// })



// var end_div_succeed = document.getElementById("end-div-succeed")
// end_div_succeed.style.backgroundColor = "red"
// var end_div_fail = document.getElementById("end-div-fail")
// //step 3 sumbit button
// document.querySelector('#page-3-button')
//   .addEventListener('click', (event) => {

//         event.preventDefault();
//         if(real_input == 123456) {
//             // end_div_succeed.style.display = "flex"
//             // end_div_succeed.className = "w-full max-w-[546px] rounded-lg p-6 gap-10  flex flex-col bg-white"
//             // end_div_fail.className = "w-full max-w-[546px] rounded-lg p-6 gap-10  hidden flex-col bg-white"
//             fakeInput1.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
//             fakeInput2.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
//             fakeInput3.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
//             fakeInput4.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
//             fakeInput5.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
//             fakeInput6.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-[#E0E2E7] rounded-[6px] font-bold text-base text-[#292D33] "
//             document.querySelector('form').submit();

//         } else if(real_input == 123455){
//             // document.getElementById("end-div-succeed").className = "w-full max-w-[546px] rounded-lg p-6 gap-10  hidden flex-col bg-white"
//             // document.getElementById("end-div-fail").className = "w-full max-w-[546px] rounded-lg p-6 gap-10  flex flex-col bg-white"
//         }
//         else {
//             // document.getElementById("end-div-succeed").className = "w-full max-w-[546px] rounded-lg p-6 gap-10  hidden flex-col bg-white"
//             // document.getElementById("end-div-fail").className = "w-full max-w-[546px] rounded-lg p-6 gap-10  hidden flex-col bg-white"
//             fakeInput1.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-red-500 rounded-[6px] font-bold text-base text-[#292D33] "
//             fakeInput2.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-red-500 rounded-[6px] font-bold text-base text-[#292D33] "
//             fakeInput3.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-red-500 rounded-[6px] font-bold text-base text-[#292D33] "
//             fakeInput4.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-red-500 rounded-[6px] font-bold text-base text-[#292D33] "
//             fakeInput5.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-red-500 rounded-[6px] font-bold text-base text-[#292D33] "
//             fakeInput6.className = "flex flex-col items-center px-[14px] pt-[12px] pb-[12px] gap-2 w-10 h-14 bg-white border-[1px] border-solid border-red-500 rounded-[6px] font-bold text-base text-[#292D33] "
//         }

//   }
// );



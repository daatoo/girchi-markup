

//suggestions 
const search = document.getElementById('search');
const search2 = document.querySelector(".search");
const matchList = document.getElementById('match-list');
const body = document.body;
const matchList_ = document.getElementById("matchList-div");
const fax = document.getElementById("fax");



const searchStates = async searchText => {
    async function searchTextt() {
        const res = await fetch('/index.json');
        const states = await res.json();
        return states;
      }
      
      searchTextt().then(states => {
        states; // fetched movies
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
                <h4 id="${match.capital}" class="font-[400] text-[14px] leading-6 text-[#292D33] ">${match.name}  </h4>
                <div class="flex h-5 w-full justify-center items-center">
                    <p class="font-[500] text-[12px] leading-6 text-[#727A82] ">პ.ნ 4000*******</p>
                    <p class="text-[#727A82]">.</p>
                    <p  class="font-[500] text-[12px] leading-5 text-[#727A82] ">ID: 433281</p>
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

// function clicking(){
//     let menu = document.getElementById("Alaskaa");
//     let children = menu.parentElement.childNodes[1].textContent;
//     console.log(children);
// }


const choosen = document.getElementById("choosen");


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

// function clicking(){
//     let menu = document.getElementById("Alaskaa");
//     let children = menu.parentElement.childNodes[1].textContent;
//     console.log(children);
// };

function clicking(clicked_id){
    var b= clicked_id;
     let menu = document.getElementById(b);
     let children = menu.children[1].firstChild.nextSibling.innerText;
    var chose = document.getElementById("chose").innerText = children;
    document.getElementById("matchList-div").style.display = "none";
    document.getElementById("choosen-div").style.display = "flex";

}

// async function dd(){
//     const response = await fetch(new URL('https://api.github.com/users/daatoo/repos'));
// return response.json();
// }
// console.log(dd())

// const url = new URL('https://api.github.com/users/daatoo/repos');
// const fetch1 = fetch("https://api.github.com/users/daatoo/repos");
// console.log(url.toString())
// console.log(fetch1.)
// var dg =  fetch("https://api.github.com/users/otarza/followers")
// .then(res => res.json())
// .then(dataa => dataa);
// console.log(dg)
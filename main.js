

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


function clicking(clicked_id){
    var b= clicked_id;
     let menu = document.getElementById(b);
     let children = menu.children[1].firstChild.nextSibling.innerText;
    var chose = document.getElementById("chose").innerText = children;
    document.getElementById("matchList-div").style.display = "none";
    document.getElementById("choosen-div").style.display = "flex";

}


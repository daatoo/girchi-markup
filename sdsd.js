//suggestions 
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');


const searchStates = async searchText => {
    async function searchTextt() {
        const res = await fetch('/index.json');
        const states = await res.json();
        return states;
      }
      searchTextt().then(states => {
        states; // fetched movies
        let matches = states.filter(state =>{
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
    // const onclick = matches.map(match => `
    // <script>
    // document.body.style.backgroundColor = "red";
    //     const ${match.name} = document.getElementsById("${match.name}")
    
    //     ${match.name}.onclick = function(){

    //     // const boxes = boxSectionElement.querySelectorAll("div, span");
    //     //     const name = document.getElementsByTagName('h1')[0].innerHTML
    //     //     console.log(name);
        
    //     let ${match.name}1 = document.getElementsById("${match.name}")

    //     let children = ${match.name}1.parentElement.childNodes[1].textContent;
    //     console.log(children);
    //     }
    // </script>
    // `).join('');
        const html = matches.map(match => `
        <script>
        document.body.style.backgroundColor = "red";
            let ${match.name} = document.getElementsById("${match.name}");
            ${match.name}.style.backgroundColor = "red";

        
            ${match.name}.onclick = function(){
    
            // const boxes = boxSectionElement.querySelectorAll("div, span");
            //     const name = document.getElementsByTagName('h1')[0].innerHTML
            //     console.log(name);
            
            let ${match.name}1 = document.getElementsById("${match.name}")
    
            let children = ${match.name}1.parentElement.childNodes[1].textContent;
            console.log(children);
            }
        </script>
        <div id="${match.name}"  class="flex flex-row items-center px-[12px] py-[8px] gap-3 w-[466px] min-h-[68px]  rounded-[4px] cursor-pointer  "   >
            <h4 id="${match.capital}" class="">${match.name} (${match.abbr}) </h4>
        </div>

        `).join('');

        // const html = html1 + onclick;
    matchList.style.display = "flex";
        matchList.innerHTML = html;
        
    }else if(matches.length === 0){
        matchList.style.display = "none";

    }

}
search.addEventListener('input', () => searchStates(search.value));



const choosen = document.getElementById("choosen");


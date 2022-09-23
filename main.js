//suggestions 
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//search statesjson and filter
// const searchStates = async searchText => {
//     const res = await fetch('../index.json');
//     const states = await res.json();
//     console.log(states);
// }
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
                matchList.innerHTML = ''
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
        <div class="flex flex-row items-center px-[12px] py-[8px] gap-3 w-[466px] h-[68px] bg-slate-400  rounded-[4px] ">
            <h4 class="">${match.name} (${match.abbr}) </h4>
        </div>
        `).join('');
        matchList.innerHTML = html;
    }
}
search.addEventListener('input', () => searchStates(search.value));
import { fetchCountries } from "./api.js";
import { renderCards ,
  regionrender,
  onerror, 
  renderStats,
  renderStatus,
  renderError,
  populationformat
} from "./render.js";
import {
  filterbySearch,
  filterbyRegion,
  sortcountries
} from  './filters.js';
import {
  countregion,
  totalpopulation
} from './stats.js'
import { debounce } from "./utils.js";
const input_select = document.querySelector('#search-input')
const region_select = document.querySelector('#region-select')
const sort_select = document.querySelector('#sort-select')
let allCountries = [];
function updateView(){
  if(allCountries.length ===0){
    return;
  }
  renderStatus("")
  const searched = filterbySearch(allCountries,input_select.value)
  const filtered = filterbyRegion(searched,region_select.value)
  const sorted = sortcountries(filtered,sort_select.value)
  console.log(sort_select.value)
  renderCards(sorted);
  renderStats(sorted.length,totalpopulation(sorted))
}
async function init() {
  renderStatus('Loading Countries...')
  try {
    allCountries = await fetchCountries();
    regionrender(Object.keys(countregion(allCountries)))
    updateView();
  } catch (error) {
    console.log(error)
    renderError('NO Countries Found:',init)
  }
}
input_select.addEventListener('input',debounce(updateView))
region_select.addEventListener('change',updateView)
sort_select.addEventListener('change',updateView)
init()

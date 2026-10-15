const ul = document.querySelector('#country-list')
const region_select = document.querySelector('#region-select')
const statcount = document.querySelector('#stat-count')
const statpopulation = document.querySelector('#stat-population')
const statusMessage = document.querySelector('#status')
function elementMaker(tag,className,text){
  const element = document.createElement(tag)
  element.className = className;
  if(text){
    element.textContent = text;
  }
  return element;
}
export const populationformat = new Intl.NumberFormat('en',{
  notation:'compact',
}
)

function cardMaker(country){
  const card = elementMaker('li','country-card');
  const flag =  elementMaker('img','country-card__flag');
  flag.src=country.flagUrl;
  flag.alt = `Flag of ${country.name}`;
  flag.loading = "lazy";
  const country_Name = elementMaker('h2','country-card__name',country.name);
  const country_Capital = elementMaker('p','country-card__capital',`Capital:${country.capital}`);
  const footer = elementMaker('div','country-card__footer')

  const region = elementMaker('span','country-card__region',country.region)
  const population = elementMaker('span','country-card__population',populationformat.format(country.population))
  footer.append(region,population);
  card.append(flag,country_Name,country_Capital,footer);
  return card;

}
export function renderCards(countries){
   const card_country = countries.map(cardMaker);
  ul.replaceChildren(...card_country)
}
export function renderStats(countrynum,totalpopulation){
  statcount.textContent=countrynum;
  statpopulation.textContent=  populationformat.format(totalpopulation);
}
export function renderStatus(message){
  statusMessage.textContent=message
}
export function regionrender(region){
  const options = region.map((region)=>{
    const option = document.createElement('option')
    option.textContent = region;
    option.value= region;
    return option;
  })
  region_select.append(...options)

}
export function renderError(msg,onRetry){
  const text = document.createTextNode(`${msg}`)
  const retryBtn = elementMaker('button','retry-button','Retry')
  retryBtn.type = 'button';
  retryBtn.addEventListener('click',onRetry)
  statusMessage.replaceChildren(text,retryBtn)

}

export function onerror(Error){
  console.log(Error)
}
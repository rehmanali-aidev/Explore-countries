export function filterbySearch(countries,input){
    const normalizedinput = input.trim().toLowerCase();
    return countries.filter((countries)=>{
        return countries.name.toLowerCase().includes(normalizedinput);
    })
}
export function filterbyRegion(countries,region){
    if(region==='alll'){
        return countries;
    }
    return countries.filter((country)=>{
        return country.region ===region;
    })
}
export function sortcountries(countries,sortkey){
    const sorted = [...countries];
    if(sortkey === 'population-desc'){
        return sorted.sort((a,b)=>b.population-a.population)
    }
    return sorted.sort((a, b) => a.name.localeCompare(b.name))
}


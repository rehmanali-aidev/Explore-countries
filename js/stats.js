export function countregion(countries){
   return countries.reduce((count,country)=>{
        count[country.region] = (count[country.region] || 0) +1;
        return count;
    },{})
}
export function totalpopulation(countries){
    return countries.reduce((totalpopulation,country)=> totalpopulation + (country.population||0),0)
}

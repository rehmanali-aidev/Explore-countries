export async function fetchCountries(){
    const response = await fetch('data/countries.json');
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const countries= await response.json();
    return countries;
}
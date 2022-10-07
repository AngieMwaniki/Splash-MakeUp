export const productsOptions = {
  method: 'GET',
  params: {q: 'eyeshadows'},
  headers: {
    'X-RapidAPI-Key': '4e79a367e3mshed9fbc3d6000ff3p1251f9jsn51bc17e5f2d5',
    'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
  }
};
export const fetchData= async (url, options) =>{
    const response =await fetch(url,options);
    const data = await response.json();
        
        return data;

}


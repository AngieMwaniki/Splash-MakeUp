export const productsOptions = {
  method: 'GET',
  params: {q: 'eyeshadows'},
  headers: {
    'X-RapidAPI-Key': Process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
  }
};
export const fetchData= async (url, options) =>{
    const response =await fetch(url,options);
    const data = await response.json();
        
        return data;

}


import axios from "axios"

export  const  getRecipes = async (searchedQuery) => { 
      try {
        let response = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${searchedQuery}`);
        return response.data;
      } 
      catch (error) {
       console.log("Error While fetching the Data", error.message);
       return error.response
      }    
}

export  const  getRecipe = async (searchedQuery) => { 
  try {
    let response = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${searchedQuery}`);
    return response.data;
  } 
  catch (error) {
   console.log("Error While fetching the Data", error.message);
   return error.response
  }    
}

import React, {useEffect, useState} from 'react'
import Search from '../Commons/Search'
import RecipeList from '../Commons/RecipeList'
import { getRecipes } from "../Services/getRecipes"

export default function Recipes() {

  const [searchedQuery , setSearchedQuery] = useState("Apple");
  const [recipes , setRecipes] = useState([]);

  useEffect(() => {
    getSearchedResult();
  },[searchedQuery])

  const getSearchedResult = async () => {
    let result = await getRecipes(searchedQuery);
    if (result && result.recipes) {
      setRecipes(result.recipes);
    }
  }

  
  return (
    <>
      <Search setSearchedQuery={setSearchedQuery} />
      <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
    </>
  )
}

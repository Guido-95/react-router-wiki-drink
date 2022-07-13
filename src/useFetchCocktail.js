
import { useEffect, useState } from "react";
import axios from "axios";
// const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
// const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";
const useFetchCocktailId = (query) => {
 
  const [isLoading, setIsLoading] = useState(true);
  const [cocktailDetail, setCocktailDetail] = useState([]);

  const [isError, setIsError] = useState(false);
//   const url = type ? singleUrl : searchUrl;
  useEffect(() => {
    
    (async (query) => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?${query}`);
        setCocktailDetail(response.data.drinks[0]);
       
      } catch (err) {
        setIsError(true);
     
      }
      setIsLoading(false);
    })(query);
  }, []);

  return { isLoading, cocktailDetail, isError };
};

export default useFetchCocktailId;
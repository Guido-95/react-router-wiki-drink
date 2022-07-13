import React,{useState,useEffect} from 'react'
import { Preloader, Spinning   } from 'react-preloader-icon';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import useTitle from '../useTitle';
import useFetchCocktailId from '../useFetchCocktail';
import './cocktailDetail.css'

function CocktailDetail() {
  // id url cocktail 
  let { id } = useParams();

  // destrutturazione dettagli cocktail,loading ed error da hook personalizzato
  const { cocktailDetail, isLoading, isError } = useFetchCocktailId(`i=${id}`);

  // ingredienti e istruzioni da riempire una volta ricevuti i dati del cocktail
  const [ingredients,setIngredients]= useState([]);
  const [measures, setMeasures] = useState([]);
 
  // se l'oggetto cocktail non è vuoto mostra il nome del cocktrail nel titolo altrimenti not found
  useTitle(Object.keys(cocktailDetail).length > 1 ? cocktailDetail.strDrink : "Not Found");

  useEffect(()=>{
    
    // quando cocktailDetail cambia controlla se è vuoto, se non lo è riempi array ingredienti e istruzioni 
    if(Object.keys(cocktailDetail).length > 1){
      let i = 1;
      let ArrayMeasures = [];
      let ArrayIngredients = [];
      while (cocktailDetail['strIngredient' + i] || cocktailDetail['strMeasure' + i] ) {
        ArrayMeasures.push(cocktailDetail['strMeasure' + i]);
        ArrayIngredients.push(cocktailDetail['strIngredient' + i]);
        i++;
      }
      setMeasures(ArrayMeasures);
      setIngredients(ArrayIngredients);
     
      
    }
  },[cocktailDetail])
   return (

    isLoading && !isError
      ? 
        <section className='container-fluid cocktail-detail'>
          <div className="loader">
            <Preloader
            use={Spinning}
            size={250}
            strokeWidth={10}
            strokeColor="#3a0ca3"
            duration={2000}/>
          </div>
        </section>
     
      : 
    !isLoading && isError 
      ?
        <div className="error-search-single-cocktail ">
          <div className="esc-button m-5 ">
              <Link className='arrow-back-link' to={'/'}> 
                <FontAwesomeIcon  className='icon-back'  icon={faArrowLeft} /> 
              </Link>
              <span>torna in home</span>
            </div>
          <div className="error w-50 alert alert-danger m-5"> 
            cocktail non disponibile
          </div>
        </div>
      :
        <section className='container-fluid cocktail-detail'>
          <div className="row">
            <div className="esc-button my-5 col-12 offset-lg-1 col-lg-11">
              <Link className='arrow-back-link' to={'/'}> 
                <FontAwesomeIcon  className='icon-back'  icon={faArrowLeft} /> 
              </Link>
              <span>torna in home</span>
            </div>
          </div>
          <div className="detail row">
            <div className="img col-12 col-md-5 col-lg-4 offset-lg-1">
              <img src={cocktailDetail.strDrinkThumb  } alt="img-cocktail" />
            </div>
            <div className="text col-12 col-md-7 col-lg-4 offset-lg-1">
              <h2 className='name-drink'>{cocktailDetail.strDrink}</h2>
              <ul className='categories-drink'>
                <li>{cocktailDetail.strAlcoholic}</li>
                <li>{cocktailDetail.strCategory}</li>
                <li>{cocktailDetail.strGlass}</li>
              </ul>
              <hr className='hr-ingredients' />
              <h4>Ingredienti :</h4>
              <ul className='ingredients-drink'>
                {measures.map((el,index)=>{
                  return <li key={index}><span className='ingredient'>{measures[index] + " " + ingredients[index]}  </span> </li>;
                })}
              
              </ul>
              <hr className='hr-ingredients' />
              <h4>istruzioni:</h4>
              <p>{cocktailDetail.strInstructionsIT}</p>
            </div>
          </div>
        </section>


  )
}

export default CocktailDetail
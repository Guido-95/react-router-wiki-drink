import React from 'react'
import './singleCocktail.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';

function SingleCocktail({strDrinkThumb,strDrink,idDrink}) {
  
  return (
    <article className='drink col-lg-3 col-md-6'>
      <div className="container-overlay-single-cocktail">
        <img src={strDrinkThumb} alt="img-drink" />
        <div className="overlay-single-cocktail">
          <div className="cocktail-name">
            {strDrink}
          </div>
          <div>
            <Link className='fucsia' to={`cocktail/${idDrink}`}>Ricetta<FontAwesomeIcon className='icon-cocktail-detail fucsia'  icon={faNoteSticky} /></Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SingleCocktail
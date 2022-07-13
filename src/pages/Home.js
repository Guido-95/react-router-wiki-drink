import React,{useState,useRef,useEffect} from 'react';
import { Preloader, Spinning} from 'react-preloader-icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Lottie from "react-lottie";
import animationData from "../assets/animation/drink-animation.json";
import SingleCocktail from '../components/SingleCocktail';
import { useGlobalContext } from '../context/context';
import useTitle from '../useTitle';
import './pages.css'
function Home() {
  
  const {drinks,query,changeQuery,loading,error} = useGlobalContext();
  const inputCocktail = useRef();
  const [nameCocktail,setNameCocktail]= useState(query);
  const [drinksLength, setDrinksLength] = useState(0);

 
  useEffect(()=>{
    if(drinks){
      setDrinksLength(drinks.length)
    }else{
      setDrinksLength(0)
    }
  },[drinks])

  useTitle("Home");

  const changeNameCocktail = (name)=>{
    setNameCocktail(name);  
    
  }
  const formCompilato = (e)=>{
    e.preventDefault();
    if (e.keyCode === 13) {
      changeQuery(nameCocktail);
    }
    changeQuery(nameCocktail);
    
  }
  

  return (
    <main>
      <div className="jumbotron ">
        <div className="overlay">
          <div className="text-jumbotron container-fluid">
            <div className="row justify-content-md-center m-5">
              <div className="left d-md-flex flex-md-column align-items-md-center d-lg-flex text-center col-12 col-md-8 col-lg-7 text-lg-left align-items-lg-start ">
                <div className="title ">
                  <h2 className='fucsia col-12 h2'>wiki drink</h2>
                  <h3 className='col-12'>Tutti i cocktail del mondo a portata di click</h3>
                </div>

                <p className='col-lg-8 col-md-10 text-md-center text-lg-left'>
                  Wiki Drink è un database internazionale 
                  che mette a tua disposizione, in maniera <span className='fucsia'>Gratuita</span>, 
                  le ricette dei più importanti e diffusi cocktail al mondo.
                </p>
                <div className='col-12'>
                  <button className='button-jumbotron '>scopri di più</button>

                </div>
              </div>
              <div className="right col-lg-5 col-md-12">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    reverse: true,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={450}
                />
              </div>
            </div>
           
          </div>
         
        </div>
        
      </div>
     
      <section className="container-fluid p-5">
        
        <form  className="mx-3" onSubmit={formCompilato}>
          <label htmlFor="drink">Cerca il tuo drink</label>
          <input id='drink' ref={inputCocktail}  onChange={(e) => changeNameCocktail(e.target.value)} value={nameCocktail}  type='text'></input>
          <FontAwesomeIcon  onClick={formCompilato} className='icon-search fucsia'  icon={faSearch} />
          
        </form>

        
        <div className={`m-3 ${drinksLength ? "show" : 'hidden'}`}>{ drinksLength } risultati</div>
        {
          loading && !error 
            ? 
              <div className="loader">
                <Preloader
                use={Spinning}
                size={120}
                strokeWidth={10}
                strokeColor="#3a0ca3"
                duration={2000}/> 
              </div>
            :
          !loading && error 
            ? 
              <div className='text-center errore'>
                Errore nella ricerca dei dati
                <FontAwesomeIcon className='icon-error fucsia' icon={faCircleExclamation} />
              </div> 
            :
              <div className="container-fluid">
                <div className="row">
                  {drinks ?
                    drinks.map((el)=>{
                      return <SingleCocktail {...el} key={el.idDrink} />
                    })
                    :
                    <div className="error alert alert-danger m-3">
                      nessun cocktail trovato
                    </div>
                    
                  }
                </div> 
              </div>
        }
       
      </section>
    </main>
  )
}

export default Home
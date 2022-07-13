import React from 'react'
import useTitle from '../useTitle';

function Contact() {
  useTitle("Contact")
  return (
    <div className="contact container-fluid">
      <div className="row text-contact flex-column">
        <h2>
          Vorresti aggiungere un cocktail?
        </h2>
        <p className='col-10 col-lg-5'>
          Il nostro team è sempre disponibile per valutare possibili nuove ricette ed ad aggiungerle alla nostro database
        </p>
      </div>
      <div className="row-form-container">
        <div className="form col-10 col-lg-6">
          <form action="">
            <div class="form-group">
              <label for="nome">
                Nome
              </label>
              <input type="text" id="nome" name="nome" class="input" placeholder="inserisci il nome.."/>
              <hr/>
            </div>
            <div class="form-group">
              <label for="cognome">
                cognome
              </label>
              <input type="text" id="cognome" name="cognome" class="input" placeholder="inserisci il cognome.."/>
              <hr/>
            </div>
          
            <div class="form-group">
              <label for="email">
                email

              </label>
              <input type="text" id="email" name="email" class="input" placeholder="inserisci email.."/>
              <hr/>
            </div>

            <div class="form-group">
              <label for="telefono">
                telefono

              </label>
              <input type="text" id="telefono" name="telefono" class="input" placeholder="inserisci telefono.."/>
              <hr/>
            </div>

            <div class="form-group">
              <label for="ricetta">
                la tua ricetta

              </label>
              <textarea rows="2"  type="tel" id="ricetta" name="ricetta" class="input" placeholder="Descrivi la tua ricetta"></textarea>

            </div>
            <button type='submit' className='button-form-contact'>invia ricetta</button>
          </form>
        </div>
      </div>
     
     
    </div>
  )
}

export default Contact
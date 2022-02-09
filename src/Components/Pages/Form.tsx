import React, { FC, } from 'react';
import './Form.css'

interface Props { }

const Form: FC<Props> = () => {
        return (
    <form>
        <div className="form-input">
            <label>
               <input className="place" type="text" placeholder="Imię" required />
            </label>
          
        
            <label>
                <input className="place" type="email" placeholder="Email" required />
            </label>
        
          <textarea className="place-mess" minLength={10} placeholder="Wiadomość" required></textarea>
          <input className="submit" type="submit" value="Wyślij"  />
       </div>
    </form>  

  )}


export default Form;
import React from 'react';
import '../../App.css';
import './ContactUs.css'
import Form from './Form'




function ContactUs() {

  return (
   
  <div className="contact-us">

    <div className="contact">
        
      <div className="phone">
        
            <h1><b>Dane Kontaktowe</b></h1>
            <h3><i className="fas fa-phone-volume"></i>   Tel: +48 123 456 789</h3>
            <h3><i className="fas fa-envelope"></i> Email: fastercar@gmail.com</h3>
            <h3><i className="fas fa-map-marker-alt"></i> Lokalizacja: Kraków</h3>

              <iframe 
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d81982.4917087868!2d19.937864194042962!3d50.04971425301532!3m2!1i1024!2i768!4f13.1
                   !5e0!3m2!1spl!2spl!4v1618992887707!5m2!1spl!2spl"
              className="map"
              >              
              </iframe>

            <div className="social">
            <h1><em>Zapraszamy na nasze Social Media!</em></h1>
             <a href="https://www.facebook.com/" target="{_blank}"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/" target="{_blank}"><i className="fab fa-instagram"></i></a>
            </div>         
      </div>
        
          
          <div className="question">
             <h1>Wyślij Zapytanie</h1>
                 <Form />         
          </div>
      </div>        
    </div>
     
    
  );
}


export default ContactUs;
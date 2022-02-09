import React from 'react';
import './Cars.css'

function Cars() {
  return(
<div className="cars">
      
    <div className="title">
          <h3>PRZEDSTAWIAMY NASZE SUPERSAMOCHODY!</h3>
          <h6><em>
           Gwarancją naszych samochodów jest imponujący wygląd aut, wyposażenie i niesamowite wrażenia z jazdy wraz z nienaganną obsługą naszego Klienta.<br />
            Zapnij pasy i ruszaj po marzenia!</em></h6>

    </div>

  <div className="moto">
  
    <div className="ferrari">
    <div className="img-st"></div>
    <div className="description">
     <h1>Ferrari 458 Italia</h1>
     <br/>
     <h2>Moc Maksymalna</h2>
     <h3> <i>570KM</i></h3>
     <h2>Przyśpieszenie 0-100</h2>
     <h3> <i>3,4 sekundy</i></h3>
     <h2>Prędkość maksymalna</h2>
     <h3>  <i>300+ km/h</i></h3>
    </div>

    <table>
  <thead>
    <tr>
      <th>Okres</th>
      <th>Cena brutto (doba)</th>
      <th>Limit kilometrów (doba)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1 dzień</td>
      <td>5000 PLN</td>
      <td>350 km</td>
    </tr>
    <tr>
      <td>2 - 7 dni</td>
      <td>4500 PLN</td>
      <td>250 km</td>
    </tr>
    <tr>
      <td>7+ dni</td>
      <td>​3000 PLN</td>
      <td>100 km</td>
    </tr>
  </tbody>
</table>


  </div>
    

    <div className="mustang">
    <div className="img-nd"></div>
    <div className="description">   
        <h1>Ford Mustang GT</h1>
        <br/>
        <h2>Moc Maksymalna</h2>
        <h3> <i>450KM</i></h3>
        <h2>Przyśpieszenie 0-100</h2>
        <h3> <i>4,6 sekundy</i></h3>
        <h2>Prędkość maksymalna</h2>
        <h3>  <i>250 km/h</i></h3>
     </div>

     <table>
  <thead>
    <tr>
      <th>Okres</th>
      <th>Cena brutto (doba)</th>
      <th>Limit kilometrów (doba)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1 dzień</td>
      <td>700 PLN</td>
      <td>350 km</td>
    </tr>
    <tr>
      <td>2 - 7 dni</td>
      <td>500 PLN</td>
      <td>250 km</td>
    </tr>
    <tr>
      <td>7+ dni</td>
      <td>​350 PLN</td>
      <td>100 km</td>
    </tr>
  </tbody>
</table>



   </div>
    
    <div className="lambo">
    <div className="img-rd"></div>
    <div className="description">
         <h1>Lamborghini</h1>
        <br/>
        <h2>Moc Maksymalna</h2>
        <h3> <i>610KM</i></h3>
        <h2>Przyśpieszenie 0-100</h2>
        <h3> <i>3,2 sekundy</i></h3>
        <h2>Prędkość maksymalna</h2>
        <h3>  <i>300+ km/h</i></h3>
    </div>
      
    <table>
  <thead>
    <tr>
      <th>Okres</th>
      <th>Cena brutto (doba)</th>
      <th>Limit kilometrów (doba)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1 dzień</td>
      <td>6000 PLN</td>
      <td>350 km</td>
    </tr>
    <tr>
      <td>2 - 7 dni</td>
      <td>5000 PLN</td>
      <td>250 km</td>
    </tr>
    <tr>
      <td>7+ dni</td>
      <td>​4500 PLN</td>
      <td>100 km</td>
    </tr>
  </tbody>
</table>

    </div>
   </div>
  </div>
 
 )
}

export default Cars;
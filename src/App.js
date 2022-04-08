import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import './App.css';
import Header from './Header';

const App = () => {

  const selectOption = [
    { value: 'brød og brødmikser', label: 'Brød og brødmikser' },
    { value: 'matfett og matfettblandinger', label: 'Matfett og matfettblandinger' },
    { value: 'ferdigretter med grønnsaker og evt. en proteindel eller en karbohydratdel', label: 'Ferdigretter med grønnsaker og evt. en proteindel eller en karbohydratdel' }
  ];

  return (
    <div className="vstack gap-3 container">

      <Header />

      <div className="row">
        <h3>Registrer ny matvare</h3>
        <div className="col-md-8">
          <p>Ved å bruke denne webkalkulatoren kan du sjekke om ny oppskriften din imøtekommer kostholdsråd og eventuelt nøkkelhullet og ernæringspåstand.</p>
        </div>
        <div className="button-div col-md-4">
          <NavLink to="/calculator" className="btn btn-primary btn-lg button-search">Gå til webkalkulatoren</NavLink>
        </div>
      </div>

      <div className="col-md-12">
        <h3>Søk i eksisterende matvarer</h3>
        <form className="form-search">
          <div className="form-group col-md-8">
            <label for="exampleFormControlSelect1">Matvarekategori</label>
            <Select placeholder={<div>Velg matvaregruppe</div>} className="form-select-md mb-3" options={selectOption} />
          </div>
          <div className="form-group row">
            <div className="col-md-8">
              <label for="exampleFormControlInput1">Søk på produkt</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div className="col-md-4 button-front-search">
              <button type="button" className="btn btn-outline-secondary">Søk</button>
            </div>
          </div>
        </form>
      </div>

      <div className="bg-light col-md-12">

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="table-font">Navn</th>
              <th scope="col" className="table-font"></th>
              <th scope="col" className="table-font">Produsent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="table-font">Skyr, med smak, kunstig søtet</th>
              <td><button type="button" className="btn btn-light btn-sm button-view">Vis matvare</button></td>
              <td>Q-Meieriene</td>
            </tr>
            <tr>
              <th scope="row" className="table-font">Yoghurt, med müsli og skogsbær, Go Morgen</th>
              <td><button type="button" className="btn btn-light btn-sm button-view">Vis matvare</button></td>
              <td>Go Morgen</td>
            </tr>
            <tr>
              <th scope="row" className="table-font">Yoghurt, blåbær, 0 % fett, Yoplait</th>
              <td><button type="button" className="btn btn-light btn-sm button-view">Vis matvare</button></td>
              <td>Yoplait</td>
            </tr>
            <tr>
              <th scope="row" className="table-font">Yoghurt, naturell</th>
              <td><button type="button" className="btn btn-light btn-sm button-view">Vis matvare</button></td>
              <td>Tine</td>
            </tr>
          </tbody>
        </table>

      </div>

      <div className="col-md-12">
        <div className="row">
          <div className="col-md-11">
            <button type="button" className="btn btn-light btn-sm button-view">Forrige</button>
          </div>
          <div className="col-md-1">
            <button type="button" className="btn btn-light btn-sm button-view">Neste</button>
          </div>
        </div>
      </div>

    </div>

  )
};



export default App;

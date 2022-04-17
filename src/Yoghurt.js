import { useState } from "react";
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Yoghurt = (props) => {

    const [fett, setFett] = useState(false);

    const onClick = () => {
        if (nutrition != "" && nutrition <= 1.5) {
            props.changeDiv(true);
            setFett(false);
        } else {
            setFett(true);
            props.changeDiv(false);
        }
    };

    const [nutrition, setNutrition] = useState('');
    const changeHandle = (event) => {
        setNutrition(event.target.value);
    };

    return (
        <div>
            <h4>Porsjon (grams)  100</h4>

            <div className="bg-light">

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className="table-font">Energi eller næringsstoff</th>
                            <th scope="col" className="table-font">Mengde (gram)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th for="energi" scope="row" className="table-font">Energi (kj)</th>
                            <td>
                                <input id='energi' aria-labelledby="energi" type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th for="energiKal" scope="row" className="table-font">Energi (kcal)</th>
                            <td>
                                <input id='energiKal' aria-labelledby="energiKal" type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={fett ? "alert-box" : null}>
                            <th for="fett" scope="row" className="table-font">{fett ? <FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /> : null} Fett (g)</th>
                            <td>
                                <input id='fett' aria-labelledby="fett" type="text" name="fett" value={nutrition} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th for='Mettede' scope="row" className="table-font">Mettede fettsyrer (g)</th>
                            <td>
                                <input id='Mettede' aria-labelledby="Mettede" type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th for='Karbohydrat' scope="row" className="table-font">Karbohydrat (g)</th>
                            <td>
                                <input id='Karbohydrat' aria-labelledby="Karbohydrat" type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th for='Sukkerarter' scope="row" className="table-font">Sukkerarter (g)</th>
                            <td>
                                <input id='Sukkerarter' aria-labelledby="Sukkerarter" type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th for='Protein' scope="row" className="table-font">Protein (g)</th>
                            <td>
                                <input id='Protein' aria-labelledby="Protein" type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th for='Salt' scope="row" className="table-font">Salt (g)</th>
                            <td>
                                <input id='Salt' aria-labelledby="Salt" type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th for='Vitamin' scope="row" className="table-font">Vitamin B12 (µg)</th>
                            <td>
                                <input id='Vitamin' aria-labelledby="Vitamin" type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th for='Kalsium' scope="row" className="table-font">Kalsium (mg)</th>
                            <td colSpan="2">
                                <input id='Kalsium' aria-labelledby="Kalsium" type="text" className="form-control"></input>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className="col-12 button-div">
                <button type="submit" className="btn btn-primary btn-lg button-search" onClick={onClick}>Søk</button>
            </div>
        </div>

    )
};

export default Yoghurt;
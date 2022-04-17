import { useState } from "react";
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Margarin = (props) => {

    const [energi, setEnergi] = useState(false);
    const [energiKal, setEnergiKal] = useState(false);
    const [fett, setFett] = useState(false);

    const onClick = () => {
        if (nutrition.energi != "" && nutrition.energi <= 80) {
            if (nutrition.energiKal != "" && nutrition.energiKal <= 26.4) {
                if (nutrition.fett != "" && nutrition.fett <= 1.1) {
                    props.changeDiv(true);
                    setEnergiKal(false);
                    setFett(false);
                    setEnergi(false);
                } else {
                    setFett(true);
                    props.changeDiv(false);
                }
                setEnergi(false);
                setEnergiKal(false);
            } else {
                setEnergiKal(true);
                props.changeDiv(false);
                if (nutrition.fett === "" || nutrition.fett > 1.1) {
                    setFett(true);
                } else {
                    setFett(false);
                }
            }
            setEnergi(false);
        } else {
            setEnergi(true);
            props.changeDiv(false);
            if (nutrition.energiKal === "" || nutrition.energiKal > 26.4) {
                setEnergiKal(true);
                if (nutrition.fett === "" || nutrition.fett > 1.1) {
                    setFett(true);
                } else {
                    setFett(false);
                }
            } else {
                setEnergiKal(false);
                if (nutrition.fett === "" || nutrition.fett > 1.1) {
                    setFett(true);
                } else {
                    setFett(false);
                }
            }
        }
    };

    const [nutrition, setNutrition] = useState({
        energi: "",
        energiKal: "",
        fett: ""
    });
    const changeHandle = (event) => {
        setNutrition({
            ...nutrition,
            [event.target.name]: [event.target.value]
        });
    };

    return (
        <div>
            <h5>Porsjon (grams)  100</h5>

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
                            <th scope="row" className="table-font">Energi (kj)</th>
                            <td>
                                <input type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-font">Energi (kcal)</th>
                            <td>
                                <input type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={energi ? "alert-box" : null}>
                            <th scope="row" className="table-font">{energi ? <FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /> : null} Fett (g)</th>
                            <td>
                                <input type="text" name="energi" value={nutrition.energi} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={energiKal ? "alert-box" : null}>
                            <th scope="row" className="table-font">{energiKal ? <FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /> : null} Mettede fettsyrer (g)</th>
                            <td>
                                <input type="text" name="energiKal" value={nutrition.energiKal} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-font">Enumettede fettsyrer (g)</th>
                            <td>
                                <input type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-font">Flerumettede fettsyrer (g)</th>
                            <td>
                                <input type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-font">Karbohydrat (g)</th>
                            <td>
                                <input type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-font">Sukkerarter (g)</th>
                            <td>
                                <input type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-font">Protein (g)</th>
                            <td>
                                <input type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={fett ? "alert-box" : null}>
                            <th scope="row" className="table-font">{fett ? <FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /> : null} Salt (g)</th>
                            <td colSpan="2">
                                <input type="text" name="fett" value={nutrition.fett} onChange={changeHandle} className="form-control"></input>
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

export default Margarin;
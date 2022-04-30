import { useState } from "react";
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@mui/material/Tooltip';

const Yoghurt = (props) => {

    const [fett, setFett] = useState(false);
    const [fettNull, setFettNull] = useState(false);
    const [energi, setEnergi] = useState(false);
    const [energiKal, setEnergiKal] = useState(false);
    const [mettede, setMettede] = useState(false);
    const [karbohydrat, setKarbohydrat] = useState(false);
    const [sukkerarter, setSukkerarter] = useState(false);
    const [protein, setProtein] = useState(false);
    const [salt, setSalt] = useState(false);

    const [nutrition, setNutrition] = useState({
        fett: '',
        energi: '',
        energiKal: '',
        mettede: '',
        karbohydrat: '',
        sukkerarter: '',
        protein: '',
        salt: ''
    });
    const changeHandle = (event) => {
        setNutrition({
            ...nutrition,
            [event.target.name]: [event.target.value]
        });
    };

    const onClick = () => {
        if (nutrition.energi != "" && nutrition.energiKal != "" && nutrition.mettede != "" && nutrition.karbohydrat != "" && nutrition.protein != "" && nutrition.salt != "" && nutrition.sukkerarter != "" && nutrition.fett != "" && nutrition.fett <= 1.5) {
            props.changeDiv(true);
            setFett(false);
            setFettNull(false);
            setEnergi(false);
            setEnergiKal(false);
            setMettede(false);
            setKarbohydrat(false);
            setSukkerarter(false);
            setSalt(false);
            setProtein(false);
        } else {
            if (nutrition.energi === "" || nutrition.energi < 0) {
                setEnergi(true);
                props.changeDiv(false);
            } else {
                setEnergi(false);
            }
            if (nutrition.energiKal === "" || nutrition.energiKal < 0) {
                setEnergiKal(true);
                props.changeDiv(false);
            } else {
                setEnergiKal(false);
            }
            if (nutrition.mettede === "" || nutrition.mettede < 0) {
                setMettede(true);
                props.changeDiv(false);
            } else {
                setMettede(false);
            }
            if (nutrition.karbohydrat === "" || nutrition.karbohydrat < 0) {
                setKarbohydrat(true);
                props.changeDiv(false);
            } else {
                setKarbohydrat(false);
            }
            if (nutrition.sukkerarter === "" || nutrition.sukkerarter < 0) {
                setSukkerarter(true);
                props.changeDiv(false);
            } else {
                setSukkerarter(false);
            }
            if (nutrition.protein === "" || nutrition.protein < 0) {
                setProtein(true);
                props.changeDiv(false);
            } else {
                setProtein(false);
            }
            if (nutrition.salt === "" || nutrition.salt < 0) {
                setSalt(true);
                props.changeDiv(false);
            } else {
                setSalt(false);
            }
            if (nutrition.fett > 1.5) {
                setFett(true);
                props.changeDiv(false);
            } else {
                setFett(false);
            }
            if (nutrition.fett === "" || nutrition.fett < 0) {
                setFettNull(true);
                props.changeDiv(false);
            } else {
                setFettNull(false);
            }
        }
    };

    console.log(nutrition);
    console.log()

    return (
        <div>
            <h4>Porsjon (gram)  100</h4>

            <div className="bg-light">

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className="table-font">Energi eller næringsstoff</th>
                            <th scope="col" className="table-font">Mengde</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={energi ? "alert-box" : null}>
                            <th for="energi" scope="row" className="table-font">{energi ? <Tooltip title="Mangler verdi i energi (kJ) parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Energi (kJ)</th>
                            <td>
                                <input id='energi' aria-labelledby="energi" type="number" min="0" step="any" name="energi" value={nutrition.energi} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={energiKal ? "alert-box" : null}>
                            <th for="energiKal" scope="row" className="table-font">{energiKal ? <Tooltip title="Mangler verdi i energi (kcal) parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Energi (kcal)</th>
                            <td>
                                <input id='energiKal' aria-labelledby="energiKal" type="number" min="0" step="any" name="energiKal" value={nutrition.energiKal} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={fett ? "alert-box" : null || fettNull ? "alert-box" : null}>
                            <th for="fett" scope="row" className="table-font">
                                {fett ? <Tooltip title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden fett. Mengden på fett må være lavere enn eller lik 1,5 / 100 g for å møte kravene for Nøkkelhullsmerking." placement="right" arrow>
                                    <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faBan} /></div></Tooltip> : null}
                                {fettNull ? <Tooltip title="Mangler verdi i fett parameter" placement="right" arrow>
                                    <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Fett (g)</th>
                            <td>
                                <input id='fett' aria-labelledby="fett" type="number" min="0" step="any" name="fett" value={nutrition.fett} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={mettede ? "alert-box" : null}>
                            <th for='mettede' scope="row" className="table-font">{mettede ? <Tooltip title="Mangler verdi i mettede fettsyrer parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Mettede fettsyrer (g)</th>
                            <td>
                                <input id='mettede' aria-labelledby="Mettede" type="number" min="0" step="any" name="mettede" value={nutrition.mettede} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={karbohydrat ? "alert-box" : null}>
                            <th for='karbohydrat' scope="row" className="table-font">{karbohydrat ? <Tooltip title="Mangler verdi i karbohydrat parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Karbohydrat (g)</th>
                            <td>
                                <input id='karbohydrat' aria-labelledby="Karbohydrat" type="number" min="0" step="any" name="karbohydrat" value={nutrition.karbohydrat} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={sukkerarter ? "alert-box" : null}>
                            <th for='sukkerarter' scope="row" className="table-font">{sukkerarter ? <Tooltip title="Mangler verdi i sukkerarter parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Sukkerarter (g)</th>
                            <td>
                                <input id='sukkerarter' aria-labelledby="Sukkerarter" type="number" min="0" step="any" name="sukkerarter" value={nutrition.sukkerarter} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={protein ? "alert-box" : null}>
                            <th for='protein' scope="row" className="table-font">{protein ? <Tooltip title="Mangler verdi i protein parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Protein (g)</th>
                            <td>
                                <input id='protein' aria-labelledby="Protein" type="number" min="0" step="any" name="protein" value={nutrition.protein} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={salt ? "alert-box" : null}>
                            <th for='salt' scope="row" className="table-font">{salt ? <Tooltip title="Mangler verdi i salt parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Salt (g)</th>
                            <td>
                                <input id='salt' aria-labelledby="Salt" type="number" min="0" step="any" name="salt" value={nutrition.salt} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th for='Vitamin' scope="row" className="table-font">Vitamin B12 (µg)</th>
                            <td>
                                <input id='Vitamin' aria-labelledby="Vitamin" type="number" min="0" step="any" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th for='Kalsium' scope="row" className="table-font">Kalsium (mg)</th>
                            <td colSpan="2">
                                <input id='Kalsium' aria-labelledby="Kalsium" type="number" min="0" step="any" className="form-control"></input>
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
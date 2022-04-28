import { useState } from "react";
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@mui/material/Tooltip';

const Margarin = (props) => {

    const [fett, setFett] = useState(false);
    const [fettNull, setFettNull] = useState(false);
    const [mettede, setMettede] = useState(false);
    const [mettedeNull, setMettedeNull] = useState(false);
    const [salt, setSalt] = useState(false);
    const [saltNull, setSaltNull] = useState(false);
    const [energi, setEnergi] = useState(false);
    const [energiKal, setEnergiKal] = useState(false);
    const [enumettede, setEnumettede] = useState(false);
    const [flerumettede, setFlerumettede] = useState(false);
    const [karbohydrat, setKarbohydrat] = useState(false);
    const [sukkerarter, setSukkerarter] = useState(false);
    const [protein, setProtein] = useState(false);

    const [nutrition, setNutrition] = useState({
        fett: "",
        mettede: "",
        salt: "",
        energi: "",
        energiKal: "",
        enumettede: "",
        flerumettede: "",
        karbohydrat: "",
        sukkerarter: "",
        protein: ""
    });
    const changeHandle = (event) => {
        setNutrition({
            ...nutrition,
            [event.target.name]: [event.target.value]
        });
    };

    const onClick = () => {
        if (nutrition.fett != "" && nutrition.fett <= 80 && nutrition.mettede != "" && nutrition.mettede <= 26.4 && nutrition.salt != "" && nutrition.salt <= 1.1 &&
            nutrition.enumettede != "" && nutrition.flerumettede != "" && nutrition.karbohydrat != "" && nutrition.protein != "" &&
            nutrition.sukkerarter != "" && nutrition.energi != "" && nutrition.energiKal != "") {
            props.changeDiv(true);
            setFett(false);
            setFettNull(false);
            setEnergi(false);
            setEnergiKal(false);
            setMettede(false);
            setMettedeNull(false);
            setKarbohydrat(false);
            setSukkerarter(false);
            setSalt(false);
            setSaltNull(false);
            setProtein(false);
            setEnumettede(false);
            setFlerumettede(false);
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
                setMettedeNull(true);
                props.changeDiv(false);
            } else {
                setMettedeNull(false);
            }
            if (nutrition.mettede > 26.4) {
                setMettede(true);
                props.changeDiv(false);
            } else {
                setMettede(false);
            }
            if (nutrition.enumettede === "" || nutrition.enumettede < 0) {
                setEnumettede(true);
                props.changeDiv(false);
            } else {
                setEnumettede(false);
            }
            if (nutrition.flerumettede === "" || nutrition.flerumettede < 0) {
                setFlerumettede(true);
                props.changeDiv(false);
            } else {
                setFlerumettede(false);
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
                setSaltNull(true);
                props.changeDiv(false);
            } else {
                setSaltNull(false);
            }
            if (nutrition.salt > 1.1) {
                setSalt(true);
                props.changeDiv(false);
            } else {
                setSalt(false);
            }
            if (nutrition.fett === "" || nutrition.fett < 0) {
                setFettNull(true);
                props.changeDiv(false);
            } else {
                setFettNull(false);
            }
            if (nutrition.fett > 80) {
                setFett(true);
                props.changeDiv(false);
            } else {
                setFett(false);
            }
        }
    };

    return (
        <div>
            <h5>Porsjon (gram)  100</h5>

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
                            <th scope="row" className="table-font">{energi ? <Tooltip title="Mangler verdi i energi (KJ) parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Energi (KJ)</th>
                            <td>
                                <input type="number" min="0" step="any" name="energi" value={nutrition.energi} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={energiKal ? "alert-box" : null}>
                            <th scope="row" className="table-font">{energiKal ? <Tooltip title="Mangler verdi i energi (kcal) parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Energi (kcal)</th>
                            <td>
                                <input type="number" min="0" step="any" name="energiKal" value={nutrition.energiKal} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={fett ? "alert-box" : null || fettNull ? "alert-box" : null}>
                            <th scope="row" className="table-font">
                                {fett ? <Tooltip title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden fett. Mengden på fett må være lavere enn eller lik 80 / 100 g for å møte kravene for Nøkkelhullsmerking." placement="right" arrow>
                                    <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faBan} /></div></Tooltip> : null}
                                {fettNull ? <Tooltip title="Mangler verdi i fett parameter" placement="right" arrow>
                                    <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Fett (g)</th>
                            <td>
                                <input type="number" min="0" step="any" name="fett" value={nutrition.fett} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={mettede ? "alert-box" : null || mettedeNull ? "alert-box" : null}>
                            <th scope="row" className="table-font">
                                {mettede ? <Tooltip title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden mettede fettsyrer. Mengden på mettede fettsyrer må være lavere enn eller lik 26,4 / 100 g for å møte kravene for Nøkkelhullsmerking." placement="right" arrow>
                                    <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faBan} /></div></Tooltip> : null}
                                {mettedeNull ? <Tooltip title="Mangler verdi i mettede fettsyrer parameter" placement="right" arrow>
                                    <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Mettede fettsyrer (g)</th>
                            <td>
                                <input type="number" min="0" step="any" name="mettede" value={nutrition.mettede} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={enumettede ? "alert-box" : null}>
                            <th scope="row" className="table-font">{enumettede ? <Tooltip title="Mangler verdi i enumettede fettsyrer parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Enumettede fettsyrer (g)</th>
                            <td>
                                <input type="number" min="0" step="any" name="enumettede" value={nutrition.enumettede} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={flerumettede ? "alert-box" : null}>
                            <th scope="row" className="table-font">{flerumettede ? <Tooltip title="Mangler verdi i flerumettede fettsyrer parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Flerumettede fettsyrer (g)</th>
                            <td>
                                <input type="number" min="0" step="any" name="flerumettede" value={nutrition.flerumettede} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={karbohydrat ? "alert-box" : null}>
                            <th scope="row" className="table-font">{karbohydrat ? <Tooltip title="Mangler verdi i karbohydret parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Karbohydrat (g)</th>
                            <td>
                                <input type="number" min="0" step="any" name="karbohydrat" value={nutrition.karbohydrat} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={sukkerarter ? "alert-box" : null}>
                            <th scope="row" className="table-font">{sukkerarter ? <Tooltip title="Mangler verdi i sukkerarter parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Sukkerarter (g)</th>
                            <td>
                                <input type="number" min="0" step="any" name="sukkerarter" value={nutrition.sukkerarter} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={protein ? "alert-box" : null}>
                            <th scope="row" className="table-font">{protein ? <Tooltip title="Mangler verdi i protein parameter" placement="right" arrow>
                                <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Protein (g)</th>
                            <td>
                                <input type="number" min="0" step="any" name="protein" value={nutrition.protein} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={salt ? "alert-box" : null || saltNull ? "alert-box" : null}>
                            <th scope="row" className="table-font">
                                {salt ? <Tooltip title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden salt. Mengden på salt må være lavere enn eller lik 1,1 / 100 g for å møte kravene for Nøkkelhullsmerking." placement="right" arrow>
                                    <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faBan} /></div></Tooltip> : null}
                                {saltNull ? <Tooltip title="Mangler verdi i salt parameter" placement="right" arrow>
                                    <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Salt (g)</th>
                            <td colSpan="2">
                                <input type="number" min="0" step="any" name="salt" value={nutrition.salt} onChange={changeHandle} className="form-control"></input>
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
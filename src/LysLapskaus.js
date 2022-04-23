import { useState } from "react";
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '@mui/material/Tooltip';

const LysLapskaus = (props) => {

    const [energi, setEnergi] = useState(false);
    const [energiKal, setEnergiKal] = useState(false);
    const [fett, setFett] = useState(false);
    const [mettede, setMettede] = useState(false);
    const [mettedeNull, setMettedeNull] = useState(false);
    const [karbohydrat, setKarbohydrat] = useState(false);
    const [sukkerarter, setSukkerarter] = useState(false);
    const [sukkerarterNull, setSukkerarterNull] = useState(false);
    const [fiber, setFiber] = useState(false);
    const [protein, setProtein] = useState(false);
    const [salt, setSalt] = useState(false);
    const [saltNull, setSaltNull] = useState(false);

    const [nutrition, setNutrition] = useState({
        energi: "",
        energiKal: "",
        fett: "",
        mettede: "",
        karbohydrat: "",
        sukkerarter: "",
        fiber: "",
        protein: "",
        salt: ""
    });
    const changeHandle = (event) => {
        setNutrition({
            ...nutrition,
            [event.target.name]: [event.target.value]
        });
    };

    const onClick = () => {
        if (nutrition.mettede != "" && nutrition.mettede <= 1.5 && nutrition.sukkerarter != "" && nutrition.sukkerarter <= 3 && nutrition.salt != "" && nutrition.salt <= 0.8 &&
            nutrition.fiber != "" && nutrition.karbohydrat != "" && nutrition.protein != "" &&
            nutrition.fett != "" && nutrition.energi != "" && nutrition.energiKal != "") {
            props.changeDiv(true);
            setFett(false);
            setEnergi(false);
            setEnergiKal(false);
            setMettede(false);
            setMettedeNull(false);
            setKarbohydrat(false);
            setSukkerarter(false);
            setSukkerarterNull(false);
            setSalt(false);
            setSaltNull(false);
            setProtein(false);
            setFiber(false);
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
            if (nutrition.mettede === "" || nutrition.mettede < 0 ) {
                setMettedeNull(true);
                props.changeDiv(false);
            } else {
                setMettedeNull(false);
            }
            if (nutrition.mettede > 1.5 ) {
                setMettede(true);
                props.changeDiv(false);
            } else {
                setMettede(false);
            }
            if (nutrition.fiber === "" || nutrition.fiber < 0) {
                setFiber(true);
                props.changeDiv(false);
            } else {
                setFiber(false);
            }
            if (nutrition.karbohydrat === "" || nutrition.karbohydrat < 0) {
                setKarbohydrat(true);
                props.changeDiv(false);
            } else {
                setKarbohydrat(false);
            }
            if (nutrition.fett === "" || nutrition.fett < 0) {
                setFett(true);
                props.changeDiv(false);
            } else {
                setFett(false);
            }
            if (nutrition.protein === "" || nutrition.protein < 0) {
                setProtein(true);
                props.changeDiv(false);
            } else {
                setProtein(false);
            }
            if (nutrition.salt === "" || nutrition.salt < 0 ) {
                setSaltNull(true);
                props.changeDiv(false);
            } else {
                setSaltNull(false);
            }
            if (nutrition.salt > 0.8) {
                setSalt(true);
                props.changeDiv(false);
            } else {
                setSalt(false);
            }
            if (nutrition.sukkerarter === "" || nutrition.sukkerarter < 0) {
                setSukkerarterNull(true);
                props.changeDiv(false);
            } else {
                setSukkerarterNull(false);
            }
            if (nutrition.sukkerarter > 3) {
                setSukkerarter(true);
                props.changeDiv(false);
            } else {
                setSukkerarter(false);
            }
        }
    };

    return (
        <div>
            <h5>Porsjon (grams)  100</h5>

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
                            <th scope="row" className="table-font">{energi ? <Tooltip title="Mangler verdi i energi (kj) parameter" placement="right" arrow><div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Energi (kj)</th>
                            <td>
                                <input type="number" min="0" step="any" name="energi" value={nutrition.energi} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={energiKal ? "alert-box" : null}>
                            <th scope="row" className="table-font">{energiKal ? <Tooltip title="Mangler verdi i energi (kcal) parameter" placement="right" arrow><div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Energi (kcal)</th>
                            <td>
                                <input type="number" min="0" step="any" name="energiKal" value={nutrition.energiKal} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={fett ? "alert-box" : null}>
                            <th scope="row" className="table-font">{fett ? <Tooltip title="Mangler verdi i fett parameter" placement="right" arrow><div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Fett (g)</th>
                            <td>
                                <input type="number" min="0" step="any" name="fett" value={nutrition.fett} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={mettede ? "alert-box" : null || mettedeNull ? "alert-box" : null}>
                            <th scope="row" className="table-font">
                            {mettede ? <Tooltip title="Produktet innfrir ikke Nøkkelhullet på grunn av mettede fettsyrer mengde. Mettede fettsyrer skal være lavere enn eller lik 1,5 g / 100 g" placement="right" arrow>
                            <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faBan} /></div></Tooltip> : null} 
                            {mettedeNull ? <Tooltip title="Mangler verdi i mettede fettsyrer parameter" placement="right" arrow>
                            <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null}
                            Mettede fettsyrer (g)</th>
                            <td>
                                <input type="number" min="0" step="any" name="mettede" value={nutrition.mettede} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={karbohydrat ? "alert-box" : null}>
                            <th scope="row" className="table-font">{karbohydrat ? <Tooltip title="Mangler verdi i karbohydrat parameter" placement="right" arrow><div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Karbohydrat (g)</th>
                            <td>
                                <input type="number" min="0" step="any" name="karbohydrat" value={nutrition.karbohydrat} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={sukkerarter ? "alert-box" : null || sukkerarterNull ? "alert-box" : null}>
                            <th scope="row" className="table-font">
                            {sukkerarter ? <Tooltip title="Produktet innfrir ikke Nøkkelhullet på grunn av sukkerarter mengde. Sukkerarter skal være lavere enn eller lik 3 g / 100 g" placement="right" arrow>
                            <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faBan} /></div></Tooltip> : null}
                            {sukkerarterNull ? <Tooltip title="Mangler verdi i sukkerarter parameter" placement="right" arrow>
                            <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} 
                            Sukkerarter (g)</th>
                            <td>
                                <input type="number" min="0" step="any" name="sukkerarter" value={nutrition.sukkerarter} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={fiber ? "alert-box" : null}>
                            <th scope="row" className="table-font">{fiber ? <Tooltip title="Mangler verdi i fiber parameter" placement="right" arrow><div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Fiber (g)</th>
                            <td>
                                <input type="number" min="0" step="any" name="fiber" value={nutrition.fiber} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={protein ? "alert-box" : null}>
                            <th scope="row" className="table-font">{protein ? <Tooltip title="Mangler verdi i protein parameter" placement="right" arrow><div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} Protein (g)</th>
                            <td>
                                <input type="number" min="0" step="any" name="protein" value={nutrition.protein} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr className={salt ? "alert-box" : null || saltNull ? "alert-box" : null}>
                            <th scope="row" className="table-font">
                            {salt ? <Tooltip title="Produktet innfrir ikke Nøkkelhullet på grunn av salt mengde. Salt skal være lavere enn eller lik 0,8 g / 100 g" placement="right" arrow>
                            <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faBan} /></div></Tooltip> : null}
                            {saltNull ? <Tooltip title="Mangler verdi i salt parameter" placement="right" arrow>
                            <div className="icon"><FontAwesomeIcon className="alert-icon" icon={faCircleExclamation} /></div></Tooltip> : null} 
                            Salt (g)</th>
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

export default LysLapskaus;
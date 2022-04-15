import { useState } from "react";

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
                        <tr className={fett ? "alert-box" : null}>
                            <th scope="row" className="table-font">Fett (g)</th>
                            <td>
                                <input type="text" name="fett" value={nutrition} onChange={changeHandle} className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-font">Mettede fettsyrer (g)</th>
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
                        <tr>
                            <th scope="row" className="table-font">Salt (g)</th>
                            <td>
                                <input type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-font">Vitamin B12 (µg)</th>
                            <td>
                                <input type="text" className="form-control"></input>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="table-font">Kalsium (mg)</th>
                            <td colSpan="2">
                                <input type="text" className="form-control"></input>
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
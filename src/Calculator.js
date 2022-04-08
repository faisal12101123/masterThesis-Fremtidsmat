import { useState } from 'react';
import Select from 'react-select';
import './App.css';
import HeaderCalculator from './HeaderCalculator';
import LysLapskaus from './LysLapskaus';

const Calculator = () => {

    const selectOption = [
        { value: 'brød og brødmikser', label: 'Brød og brødmikser' },
        { value: 'matfett og matfettblandinger', label: 'Matfett og matfettblandinger' },
        { value: 'ferdigretter med grønnsaker og evt. en proteindel eller en karbohydratdel', label: 'Ferdigretter med grønnsaker og evt. en proteindel eller en karbohydratdel' }
    ];

    const selectBread = [
        { value: 'apple', label: 'Apple' },
        { value: 'orange', label: 'Orange' },
        { value: 'blueberry', label: 'Blueberry' }
    ];

    const selectFat = [
        { value: 'black', label: 'Black' },
        { value: 'blue', label: 'Blue' },
        { value: 'white', label: 'White' }
    ];

    const selectVeg = [
        { value: 'lys lapskaus', label: 'Lys lapskaus' },
        { value: 'sea', label: 'Sea' },
        { value: 'ocean', label: 'Ocean' }
    ];

    const [selectsGroup, setSelectGroups] = useState("");

    const [selectsProduct, setSelectProduct] = useState("");

    const handlerGroup = (event) => {
        setSelectGroups(event.value);
    };

    const handlerProduct = (event) => {
        setSelectProduct(event.value);
    };

    const [showResults, setShowResults] = useState(false);
    const updateResult = (newResult) => {
        setShowResults(newResult)
    }

    return (

        <div className="vstack gap-3 container">

            <HeaderCalculator />

            <div className="row">

                <div className="col-md-6">
                    <h3>Legg inn næringsinnhold</h3>

                    <Select placeholder={<div>Velg matvaregruppe</div>} className="form-select-md mb-3" onChange={handlerGroup} options={selectOption} />

                    {selectsGroup === 'brød og brødmikser' &&
                        <Select placeholder={<div>Velg mat</div>} className="form-select-md mb-3" options={selectBread} />
                    }

                    {selectsGroup === 'matfett og matfettblandinger' &&
                        <Select placeholder={<div>Velg mat</div>} className="form-select-md mb-3" options={selectFat} />
                    }

                    {selectsGroup === 'ferdigretter med grønnsaker og evt. en proteindel eller en karbohydratdel' &&
                        <Select placeholder={<div>Velg mat</div>} className="form-select-md mb-3" onChange={handlerProduct} options={selectVeg} />
                    }

                    {selectsGroup === 'ferdigretter med grønnsaker og evt. en proteindel eller en karbohydratdel' &&
                        selectsProduct === 'lys lapskaus' &&
                        <LysLapskaus changeDiv={updateResult} />
                    }

                </div>

                <div className="col-md-6">
                    <h3>Mulige ernærings- og helsepåstander</h3>
                    {showResults ?
                        <div className="container food-result-container">
                            <h5>Nøkkelhullet</h5>
                            <p>Produktet innfrir Nøkkelhullet </p>
                        </div> : null
                    }
                </div>

            </div>
        </div>
    )
};

export default Calculator;
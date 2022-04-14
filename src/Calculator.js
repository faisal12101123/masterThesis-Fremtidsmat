import { useState } from 'react';
import Select from 'react-select';
import './App.css';
import HeaderCalculator from './HeaderCalculator';
import LysLapskaus from './LysLapskaus';
import Margarin from './Margarin';
import Yoghurt from './Yoghurt';

const Calculator = () => {

    const selectOption = [
        { value: 'fermenterte meieriprodukter', label: 'Fermenterte meieriprodukter' },
        { value: 'matfett og matfettblandinger', label: 'Matfett og matfettblandinger' },
        { value: 'middagsretter', label: 'Middagsretter' }
    ];

    const selectBread = [
        { value: 'yoghurt', label: 'Yoghurt' },
        { value: 'kefir', label: 'Kefir' },
        { value: 'romme', label: 'Rømme' }
    ];

    const selectFat = [
        { value: 'margarin og smor matolje', label: 'Margarin og smør Matolje' },
        { value: 'frityrfett majones', label: 'Frityrfett Majones' },
        { value: 'dressing tran', label: 'Dressing Tran' }
    ];

    const selectVeg = [
        { value: 'lys lapskaus', label: 'Lys lapskaus' },
        { value: 'fiskegrateng', label: 'Fiskegrateng' },
        { value: 'lassagne', label: 'Lassagne' }
    ];

    const [selectsGroup, setSelectGroups] = useState("");

    const [selectsProduct, setSelectProduct] = useState("");

    const handlerGroup = (event) => {
        setSelectGroups(event.value);
    };

    const handlerProduct = (event) => {
        setSelectProduct(event.value);
    };

    const [showResults, setShowResults] = useState('');
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

                    {selectsGroup === 'fermenterte meieriprodukter' &&
                        <Select placeholder={<div>Velg mat</div>} className="form-select-md mb-3" onChange={handlerProduct} options={selectBread} />
                    }

                    {selectsGroup === 'matfett og matfettblandinger' &&
                        <Select placeholder={<div>Velg mat</div>} className="form-select-md mb-3" onChange={handlerProduct} options={selectFat} />
                    }

                    {selectsGroup === 'middagsretter' &&
                        <Select placeholder={<div>Velg mat</div>} className="form-select-md mb-3" onChange={handlerProduct} options={selectVeg} />
                    }

                    {selectsGroup === 'fermenterte meieriprodukter' &&
                        selectsProduct === 'yoghurt' &&
                        <Yoghurt changeDiv={updateResult} />
                    }

                    {selectsGroup === 'matfett og matfettblandinger' &&
                        selectsProduct === 'margarin og smor matolje' &&
                        <Margarin changeDiv={updateResult} />
                    }

                    {selectsGroup === 'middagsretter' &&
                        selectsProduct === 'lys lapskaus' &&
                        <LysLapskaus changeDiv={updateResult} />
                    }

                </div>

                <div className="col-md-6">
                    <h3>Mulige ernærings- og helsepåstander</h3>
                    {showResults ?
                        <div className="container food-result-container">
                            <h5>Nøkkelhullet</h5>
                            <p>Produktet innfrir Nøkkelhullet. </p>
                        </div> : <div className="container food-negResult-container">
                            <h5>Nøkkelhullet</h5>
                            <p>Produktet løser ikke inn nøkkelhullet. </p>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
};

export default Calculator;
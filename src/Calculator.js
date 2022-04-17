import { useState } from 'react';
import Select from 'react-select';
import './App.css';
import HeaderCalculator from './HeaderCalculator';
import LysLapskaus from './LysLapskaus';
import Margarin from './Margarin';
import Yoghurt from './Yoghurt';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Calculator = () => {

    const selectOption = [
        { value: 'fermenterte meieriprodukter', label: 'Fermenterte meieriprodukter' },
        { value: 'matfett og matfettblandinger', label: 'Matfett og matfettblandinger' },
        { value: 'middagsretter', label: 'Middagsretter' }
    ];

    const selectBread = [
        { value: 'yoghurt', label: 'Yoghurt' },
        { value: 'kefir', label: 'Kefir' },
        { value: 'romme', label: 'Rømme' },
        { value: 'syrnet melk', label: 'Syrnet melk' }
    ];

    const selectFat = [
        { value: 'margarin og smor', label: 'Margarin og smør' },
        { value: 'matolje', label: 'Matolje' },
        { value: 'frityrfett', label: 'Frityrfett' },
        { value: 'majones', label: 'Majones' },
        { value: 'dressing', label: 'Dressing' },
        { value: 'tran', label: 'Tran' }
    ];

    const selectVeg = [
        { value: 'lys lapskaus', label: 'Lapskaus' },
        { value: 'fiskegrateng', label: 'Fiskegrateng' },
        { value: 'kjottkaker i brun saus', label: 'Kjøttkaker i brun saus' },
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
    };

    const [info, setInfo] = useState('');
    const onClick = () => {
        setInfo(true);
    };
    const onClickClose = () => {
        setInfo(false);
    };

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
                        selectsProduct === 'margarin og smor' &&
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
                            <div className='row'>
                                <div className='col-md-10'>
                                    <p>Produktet innfrir Nøkkelhullet. </p>
                                </div>
                                <div className='col-md-2'>
                                    <FontAwesomeIcon className='info-button' icon={faCircleInfo} onClick={onClick} />
                                </div>
                            </div>
                            {info ? <div className="container info-div row">
                                <div className='col-md-10'>
                                    <p>Les mer om hvilke krav det stilles for merking av Nokkellhullet på Lovdatas "Forskrift om frivillig merking a nœringsmidler med Nokkellhullet":
                                        <a href="https://lovdata.no/dokument/SF/forskrift/2015-02-18-139">lovdata.no</a></p>
                                </div>
                                <div className='col-md-2'>
                                    <FontAwesomeIcon className='x-button' icon={faXmarkCircle} onClick={onClickClose} />
                                </div>
                            </div> : null
                            }
                        </div> : null
                    }
                    {showResults === false && <div className="container food-negResult-container">
                        <h5>Nøkkelhullet</h5>
                        <div className='row'>
                            <div className='col-md-10'>
                                <p>Produktet innfrir ikke Nøkkelhullet. </p>
                            </div>
                            <div className='col-md-2'>
                                <FontAwesomeIcon className='info-button' icon={faCircleInfo} onClick={onClick} />
                            </div>
                        </div>
                        {info ? <div className="container info-div row">
                            <div className='col-md-10'>
                                <p>Les mer om hvordan oppnå kriteriene på Lovdata’s Forskrift om frivillig merking av næringsmidler med Nøkkelhullet:
                                    <a href="https://lovdata.no/dokument/SF/forskrift/2015-02-18-139">lovdata.no</a></p>
                            </div>
                            <div className='col-md-2'>
                                <FontAwesomeIcon className='x-button' icon={faXmarkCircle} onClick={onClickClose} />
                            </div>
                        </div> : null
                        }
                    </div>
                    }
                </div>

            </div>
        </div>
    )
};

export default Calculator;
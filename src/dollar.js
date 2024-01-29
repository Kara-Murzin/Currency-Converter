import React, { useState } from 'react';
import classes from "./UI/MyButtons/mybutton.module.css";

const Converter = () => {
    const [dollar, setDollar] = useState('');
    const [tenge, setTenge] = useState('');

    const changeInput = (event) => {
        setDollar(event.target.value);
    };

    const convertCurrency = () => {
        const converted = parseFloat(dollar) * 453;
        setTenge(converted.toFixed(2));
    };

    return (
        <div className={classes.form}>
            <p className="textTitle">Component: AppComponent</p>
            <label className={classes.firstComp}>
                <p className="textOfTitle">Component: DollarSubmitComponent</p>
                <p className="textDollar">Dollar</p>
                <input className={classes.myInp} type="number" value={dollar} onChange={changeInput} />
                <br/>
                <button className={classes.myBtn} onClick={convertCurrency}>SUBMIT</button>
            </label>
            <label className={classes.secondComp}>
                <p className="">Component: TengeComponent</p>
                <p className="">Tenge</p>
                <input className={classes.myInpTenge} type="text" value={tenge} />
            </label>
        </div>
    );
};

export default Converter;

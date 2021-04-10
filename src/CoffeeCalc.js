import FA from 'react-fontawesome';
import { useState, useEffect } from 'react';

export const CoffeeCalc = (props) => {

    const [weight, setWeight] = useState('');
    const [water, setWater] = useState(0);

    const calcWater = (e) => {
        const gc = e.target.valueAsNumber;
        setWeight(gc || '');
    
        if (gc) {
          setWater(gc * props.coffee.Ratio);
        } else {
          setWater(0);
        }
      }

    useEffect(() => {
        setWeight('');
        setWater(0);

    }, [props.coffee])

    return (
        <div>
        {props.show &&
            <div>
                <div className="input-group">
                    <label>Grind Setting</label>
                    <div className="grind">
                        <span>{props.coffee.Grind}</span> <FA name="cog" />
                    </div>
                </div>
                <div className="input-group">
                    <label>Grams of Coffee?</label>
                    <input 
                        type="number" 
                        value={weight}
                        pattern="[0-9]*" 
                        inputMode="numeric"
                        onChange={calcWater} 
                        className="coffeeWeight"/>
                </div>

                <div className="input-group">
                    <label>Grams of Water:</label>
                    <div className="water">
                        <span>{water}</span> <FA name="tint" />
                    </div>
                </div>
            </div>
        }
        </div>
    );
}
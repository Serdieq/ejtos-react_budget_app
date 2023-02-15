import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [currencyLabel, setCurrencyLabel] = useState('$ Dollar');
  const [showClass, setShowClass] = useState('');

  const changeCurency = (val)=>{
    dispatch({
        type: 'CHG_CURRENCY',
        payload: val,
    })  
  }

  console.log(showClass)
  
  return (
    <div className='alert alert-secondary'>
      <div className='alert-success'>
        Currency {
        <select name="Currency" id="Currency" onChange={event => changeCurency(event.target.value)}
          className="selectpicker"
        >
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Rupee</option>
        </select>	
        }
      </div>
    </div>
  )
}

export default Currency
import React from 'react';
import EuroIcon from '@mui/icons-material/Euro';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';



export default function EventPrice({eventForm, setEventForm}) {
    function HandleButton(e, type) {
        e.preventDefault();
        type === 'EUR' && setEventForm({...eventForm, currency: "EUR"})
        type === 'PLN' && setEventForm({...eventForm, currency: "PLN"})
        type === 'USD' && setEventForm({...eventForm, currency: "USD"})
        
    }
    return (
        <div className="create__event-price">
            <div className="create__price-amount">
                <label htmlFor="createPrice"> Price</label>
                <input
                    type="number"
                    min="1"
                    step="any"
                    id="createPrice"
                    placeholder="Price"
                    value={eventForm.price}
                    onChange={e => setEventForm({...eventForm, price: e.target.value})}
                />
            </div>
            <div className="create__currency--polish">
                <span>Złoty</span>
                <button className={`${eventForm.currency === 'PLN' && 'create__button-active'}`} onClick={e => HandleButton(e, 'PLN')}>
                    Zł
                </button>
            </div>
            <div className="create__currency--dollar">
                <span>Dollar</span>
                <button className={`${eventForm.currency === 'USD' && 'create__button-active'}`} onClick={e => HandleButton(e, 'USD')}>
                    <AttachMoneyIcon />
                </button>
            </div>
            <div className="create__currency--euro">
                <span>Euro</span>
                <button className={`${eventForm.currency === 'EUR' && 'create__button-active'}`} onClick={e => HandleButton(e, 'EUR')}>
                    <EuroIcon />
                </button>
            </div>
            
        </div>
    );
}

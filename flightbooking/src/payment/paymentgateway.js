
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState } from 'react';
import React from 'react'

function Paymentgate() {

    const [show, setShow] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [orderId, setOrderId] = useState(false)

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                   
                    amount: {
                        currency_code: 'USD',
                        value: 10
                    },
                },
            ],
            application_context: {
                shipping_preference: 'NO_SHIPPING'
            }
        })
            .then((orderID) => {
                setOrderId(orderID)
                return orderID
            })
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details
            setSuccess(true)
        })
    }

    const onError = (data, actions) => {
        setErrorMessage("An error occured with your payment")
    }

    return (
        <div className="App">
            <PayPalScriptProvider
                options={{
                    "client-id":
                        "AQhxTmz0c7JBzCCWu8aJofffHWrn5dCxnNlNg9rD_Z8IV0UbQyxjMDYhdZRG0XYyVVtbmZc7QY49FpaW"
                }}
            >
               &nbsp;
                <button onClick={() => setShow(true)} type='submit' style={{ color: 'blue' }}>
                    Online Payment
                </button>
                &nbsp;     &nbsp;     &nbsp;
<button>
    <a href="/payment"> Offline Payment</a>
   
</button>
<br/>
                {show ? (
                    <PayPalButtons style={{ layout: 'vertical' }} createOrder={createOrder}
                        onApprove={onApprove} onError={onError} />
                ) : null}

                {success ? (
                    <h1>Your Payment has been done successfully 
                        <a href="/checkin">Go to Check in</a>
                    </h1>

                ) : <h2 style={{ color: 'blue', lineHeight : 2, padding: 20 }}>Payment is pending</h2>}

            </PayPalScriptProvider>
            
        </div>
    );
}

export default Paymentgate;
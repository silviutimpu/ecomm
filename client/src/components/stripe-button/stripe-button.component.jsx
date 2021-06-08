import React from 'react';

// librarie care inlocuieste fetch
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceStripe = price * 100;
    const publishableKey = 'pk_test_51IyxdNIwwFVm366iaqGxwNCvC9j6eo77LIlqollBocOes0bh9CNnOKRkbZcWyc96lAgsIx7cKAzAtFojmR7eiFGf00wBNZjkrn';
    
    const onToken = token =>{
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceStripe,
                token
            }
        }).then(response => {
            alert('Plată realizată cu succes!')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('A apărut o eroare! Plata dumneavoastră nu a fost procesată!');
        })
    }

    return(
        <StripeCheckout 
        currency="ron"
        label="Finalizare"
        name="Proiect licenta"
        billingAddress
        shippingAddress
        description={`Totalul este de ${price} lei`}
        amount={priceStripe}
        panelLabel ='Plătește acum'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
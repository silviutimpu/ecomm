import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceStripe = price * 100;
    const publishableKey = 'pk_test_51IyxdNIwwFVm366iaqGxwNCvC9j6eo77LIlqollBocOes0bh9CNnOKRkbZcWyc96lAgsIx7cKAzAtFojmR7eiFGf00wBNZjkrn';
    const onToken = token =>{
        console.log(token);
        alert('Tranzacție realizată cu succes!');
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
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JIedfEkP2VRXUAd8mhOkNL7UWIrAUhojGt0Loo9YtklPzce9kdLFuOah6qWiao6uEsTOCruED7sCpLEDtxhNMVP00KzBzJ5kA';

const onToken = token => {
        console.log(token);
        alert('Payment Succesfull')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name="Altered Art"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
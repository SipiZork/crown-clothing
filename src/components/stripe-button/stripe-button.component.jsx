import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_sfMDfYTaG8WyqXG263pKn3Sn00NksvUmYB'

  const onToken = token => {
    console.log(token)
    alert('Payment successful')
  }

  return (
    <StripeCheckout
      label='Pay now'
      name='ZorkMedia Kft'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUZ.svg'
      discription={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
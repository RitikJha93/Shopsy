import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getOrderDetails, payOrder } from "../redux/actions/orderActions"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { Alert } from "antd"
import axios from "axios"
import { PayPalButton } from "react-paypal-button-v2";

const OrderPlacedDetails = () => {

  const [sdkReady, setSdkReady] = useState(false)
  const { orderId } = useParams()
  const dispatch = useDispatch()
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  if (!loading) {
    order.itemsPrice = order?.orderItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  }
  useEffect(() => {

    const addPaypalScript = async () => {

      const { data: clientId } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/config/paypal`)
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onLoad = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!order || successPay) {
      dispatch({type:'ORDER_PAY_RESET'})
    }
    else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [dispatch, orderId, order, successPay])

  useEffect(() => {
    dispatch(getOrderDetails(orderId))
  }, [orderId,successPay])
  

  const successPaymentHandler = (paymentResult) =>{
    console.log(paymentResult);
    dispatch(payOrder(orderId,paymentResult))
  }
  return (
    <div className="mt-24 md:px-24 sm:px-12 px-6 grid grid-cols-3 gap-5">
      {loading ? <Loader /> : error ? <Message /> : <>
        <div className="col-span-2">
          <div className="flex items-start flex-col">
            <h1 className="font-bold text-xl text-center mb-6">Order {orderId}</h1>
            <h2 className="font-semibold text-2xl">SHIPPING</h2>
            <p className="mt-2">
              <strong>Addresss : </strong>
              {order?.shippingAddress.address},{order?.shippingAddress.city},
              {order?.shippingAddress.postalCode},{order?.shippingAddress.country}
            </p>
            <div>
              <p><strong>Name : </strong>{order?.user.name}</p>
              <strong>Mail : <a href={`mailto:${order?.user.email}`} className="font-normal">{order?.user.email}</a></strong>
            </div>
            {
              !(order.isDelivered) && <Alert className="mt-4 w-[100%]" message='Not Delivered' type='error' showIcon />
            }
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="font-semibold text-2xl">PAYMENT METHOD</h2>
            <p className="mt-2">
              <strong>Method : </strong> {order?.paymentMethod}
            </p>
            {
              !order.isPaid ? <Alert className="mt-4" message='Not Paid' type='error' showIcon /> :  <Alert className="mt-4" message={order.paidAt} type='success' showIcon />
            }
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="font-semibold text-2xl">ORDER ITEMS</h2>
            {order?.orderItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <div>
                {order?.orderItems.map((item, index) => {
                  return (
                    <>
                      <div className="flex items-center my-3 justify-between w-[600px]">
                        <div className="flex items-center">
                          <img
                            className="max-w-[50px] rounded-md"
                            src={item.image}
                            alt=""
                          />
                          <Link
                            to={`/product/${item.product}`}
                            className="ml-4 hover:underline"
                          >
                            {item.name}
                          </Link>
                        </div>
                        <p className="font-semibold">
                          {item.quantity} X {item.price}$ ={" "}
                          {(item.quantity * item.price).toFixed(2)}$
                        </p>
                      </div>
                      <hr className="my-2" />
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl text-center">Order Summary</h1>
          <div className="border rounded-lg px-6 py-4 mt-4">
            <div className="flex justify-between my-2">
              <p className="font-semibold text-lg">Items</p>
              <p className="font-semibold">{order?.itemsPrice} $</p>
            </div>
            <div className="flex justify-between my-2">
              <p className="font-semibold text-lg">Shipping</p>
              <p className="font-semibold">{order?.shippingPrice} $</p>
            </div>
            <div className="flex justify-between my-2">
              <p className="font-semibold text-lg">Tax</p>
              <p className="font-semibold">{order?.taxPrice} $</p>
            </div>
            <div className="flex justify-between my-2">
              <p className="font-semibold text-lg">Total</p>
              <p className="font-semibold">{order?.totalPrice} $</p>
            </div>
            {
              !order.isPaid && <div>
                {/* {loadingPay && <Loader />} */}
                <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler}/>
              </div>
            }
          </div>
        </div>
      </>}
    </div>
  )
}
export default OrderPlacedDetails
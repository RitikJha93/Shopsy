import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getMyOrders } from "../../redux/actions/orderActions";
import { Link, useNavigate } from "react-router-dom";
import { ImCross } from 'react-icons/im'
import { TiTick } from 'react-icons/ti'
const MyOrders = () => {

  const myOrders = useSelector((state) => state.myOrders)
  const { orders, loading: orderLoading, error: orderError } = myOrders

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMyOrders())
  }, [dispatch])

  return (
    <div>
      {orders?.length === 0 ? <h2>No Orders</h2> : <div>
        <div>
          {
            orders?.map((order) => {
              return (
                <div className="flex justify-between relative">
                  <div>
                    <h2 className="font-bold my-3 text-lg">PRODUCT</h2>
                    {order.orderItems.map((orderItem) => {
                      return (
                        <div>
                          <img className="max-w-[100px] rounded-md" src={orderItem.image} alt="" />
                          <p className="mt-4 max-w-[160px]">{orderItem.name}</p>

                        </div>
                      )
                    })}
                  </div>
                  <div>
                    <h2 className="font-bold my-3 text-lg">ORDERID</h2>
                    <p>{order._id}</p>
                  </div>
                  <div>
                    <h2 className="font-bold my-3 text-lg">DATE</h2>
                    <p>{order?.createdAt?.substr(0, 10)}</p>
                  </div>
                  <div>
                    <h2 className="font-bold my-3 text-lg">TOTAL</h2>
                    <p>{order.totalPrice} $</p>
                  </div>
                  <div>
                    <h2 className="font-bold my-3 text-lg">DELIVERED</h2>
                    {!order.isDelivered ? <ImCross className="text-red-600" /> : <TiTick className="text-green-600 text-2xl" />}
                  </div>
                  <div>
                    <h2 className="font-bold my-3 text-lg">PAID</h2>
                    <p>{order?.paidAt?.substr(0, 10)}</p>
                  </div>
                  <Link to={`/order/${order._id}`}>
                    <button className="absolute px-4 py-2 border border-blue-500 rounded-md right-5 bottom-5">
                      Details
                    </button>
                  </Link>
                </div>
              )
            })
          }
          <hr className="mt-2" />
        </div>
      </div>}
    </div>
  )
}
export default MyOrders
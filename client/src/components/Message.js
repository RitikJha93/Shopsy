import { Alert } from "antd"

const Message = ({message,type}) => {
  return (
    <div className="mt-16 absolute right-0">
        <Alert message={message} type={type} showIcon closable />
    </div>
  )
}
export default Message
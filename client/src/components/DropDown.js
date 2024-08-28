import { Button, Dropdown } from 'antd';

const DropDown = ({items,name}) => {
    return (
        <div>
            <Dropdown
                menu={{
                    items,
                }}
                placement="bottomLeft"
            >
                <Button>{name}</Button>
            </Dropdown>
        </div>
    )
}
export default DropDown
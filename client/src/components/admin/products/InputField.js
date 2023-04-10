
const InputField = ({ type, placeholder, onChange, value, name, edit }) => {
    return (
        <>
            {
                name === 'description' ? <textarea name={name} value={value} placeholder={placeholder} onChange={onChange} className="w-[100%] h-[130px] resize-none outline-none border border-blue-500 rounded-lg px-4 py-2 focus:border focus:border-blue-600 my-3 text-lg" /> :
                    <input
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                        name={name}
                        className={`outline-none ${edit && 'w-[100%]'} my-3 text-lg border border-blue-500 rounded-lg px-4 py-2 focus:border focus:border-blue-600`}
                        value={value}
                    />
            }
        </>


    );
};
export default InputField;

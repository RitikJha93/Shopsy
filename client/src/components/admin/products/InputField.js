
const InputField = ({ type, placeholder, onChange, value, name, file, setFile }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            className="outline-none my-3 text-lg border border-blue-500 rounded-lg px-4 py-2 focus:border focus:border-blue-600"
            value={value}
        />

    );
};
export default InputField;

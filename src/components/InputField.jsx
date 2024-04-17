export const InputField = ({label, type, name, placeholder, value, onChange, isSubmitted, error, ...props}) => {
  return (
    <div className="input-group">
        <label>{label}</label>
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
          required
        />
        {error !== '' && (
          <span className="label-danger">{error}</span>
        )}
      </div>
  );
};





export default InputField;
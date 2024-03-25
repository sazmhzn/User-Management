const InputField = ({label, type, name, value, onChange, isSubmitted, error, ...props}) => {
  return (
    <>
      <div className="input-group">
        <label>{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          {...props}
          required
        />
        {`${isSubmitted}` && `${value}` === "" && (
          <span className="label-danger">{error}</span>
        )}
      </div>
    </>
  );
};

export default InputField;
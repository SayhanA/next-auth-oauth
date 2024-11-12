const Input = (props) => {
  return (
    <input className={`${props?.className} border px-3 py-2`} {...props} />
  );
};

export default Input;



const Message = (props) => {
  return (
    <>
      {props.message && (
        <div className="errorMessage">
          <p>{props.message}</p>
        </div>
      )}
    </>
  );
};

export default Message;

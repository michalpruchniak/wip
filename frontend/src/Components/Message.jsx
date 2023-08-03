const Message = ({ children, type = "danger" }) => {
  return <div className={`alert alert-${type}`}>{children}</div>;
};

export default Message;

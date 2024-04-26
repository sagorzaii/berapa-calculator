const Label = (prop: { text: string }) => {
  const { text } = prop;
  return (
    <div className="label">
      <span className="label-text">{text}</span>
    </div>
  );
};

export default Label;

const Title = (prop: { text: string }) => {
  const { text } = prop;
  return <p className="text-lg font-bold">{text}</p>;
};

export default Title;

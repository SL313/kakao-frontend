type TitleType = {
  title: string;
  subTitle?: string;
};

const Title = (text: TitleType) => {
  const { title, subTitle } = text;
  return (
    <>
      <h1>{title}</h1>
      <hr />
      {subTitle !== undefined && <h3>{subTitle}</h3>}
    </>
  );
};

export default Title;

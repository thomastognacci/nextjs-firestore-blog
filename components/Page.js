import Meta from "./Meta";
import Header from "./Header";

const Page = (props) => {
  const {children} = props;
  return (
    <>
      <Meta />
      <Header />
      {children}
    </>
  );
};

export default Page;

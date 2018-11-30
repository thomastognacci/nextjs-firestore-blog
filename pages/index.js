import Posts from "../components/Posts";

const Home = (props) => (
  <>
    <h1>Storytime!</h1>
    {process.env.NODE_ENV === "development" && <div>Hi dev</div>}

    <Posts isAdmin={props.isAdmin} />
  </>
);

export default Home;

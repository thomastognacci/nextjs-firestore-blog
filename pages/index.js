import Posts from "../components/Posts";

const Home = (props) => (
  <>
    <h1>Hi, home.</h1>
    <Posts isAdmin={props.isAdmin} />
  </>
);

export default Home;

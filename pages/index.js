import Posts from "../components/Posts";

const Home = (props) => (
  <>
    <h1>Storytime!</h1>
    <Posts isAdmin={props.isAdmin} />
  </>
);

export default Home;

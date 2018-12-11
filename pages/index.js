import Posts from "../components/Posts";
import {db} from "../lib/firebase";

const Home = (props) => (
  <>
    <h1>Storytime!</h1>
    {process.env.NODE_ENV === "development" && <div>Hi dev</div>}

    <Posts isAdmin={props.isAdmin} theStory={props.story} />
  </>
);

Home.getInitialProps = async () => {
  const ref = db.collection("stories").doc("story-1");

  return ref
    .get()
    .then(function(doc) {
      if (doc.exists) {
        return doc.data().content;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .then((story) => {
      console.log("FOUND A STORY!");

      return {story};
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

export default Home;

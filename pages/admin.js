import Login from "../components/Login";

const Admin = (props) => (
  <div>
    <h1>Adminland!</h1>
    <Login handleAdminSignIn={props.handleAdminSignIn} />
  </div>
);

export default Admin;

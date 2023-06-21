import { fetchUsers } from "../../redux/user/userActions";

import { connect } from "react-redux";

import { useEffect } from "react";
import "./index.css";

const UserDetails = (props) => {
  const { fetchUsers, userDetails } = props;
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  {/* here the userDetails state contains {users, error, loading} => properties */}

  return (
    <div className="container">
      {userDetails.users.map((eachUser) => (
        <div key={eachUser.id} className="item">
          <h1>{eachUser.name}</h1>
          <h2>{eachUser.username}</h2>
          <h3>{eachUser.email}</h3>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetails: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);

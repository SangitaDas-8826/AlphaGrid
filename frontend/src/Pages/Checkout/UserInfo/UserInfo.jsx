import './UserInfo.css'

const UserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (!userInfo || !userInfo.name) {
    return (
      <div className="text-danger mb-3">
        User not logged in
      </div>
    );
  }

  return (
    <div className="user-info border-bottom pb-3 mb-3">
      <h6 className="text-secondary fw-bold">DELIVER TO</h6>

      <div>
        <strong>{userInfo.name}</strong>
      </div>
    </div>
  );
};

export default UserInfo;

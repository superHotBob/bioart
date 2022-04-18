export default function Profile() {
  return (
    <div className="mainBlock">
      <h1>Profile Settings</h1>
      <label>
        <p>User Name</p>
        <input type="text" />
      </label>
      <label>
        <p>Email Address</p>
        <input type="text" />
      </label>
      <label>
        <p>Representaive Planet</p>
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
      </label>
      <label>
        <p>Notification Settings</p>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
      </label>

      <style jsx>{`
        .mainBlock {
          width: 69%;
          margin: 80px auto;
        }
      `}</style>
    </div>
  );
}

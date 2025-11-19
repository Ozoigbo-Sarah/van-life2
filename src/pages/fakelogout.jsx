  export default function FakeLogout() {
    localStorage.removeItem("loggedin");
    return (
        <div className="logout-container">
          <div className="logout-box">
            <h1 className="logout-title">You have been logged out</h1>
            <p className="logout-message">Thank you for using our service. You can log in again anytime.</p>
          </div>
        </div>
    )
}
import "../../CSS/Modal.css"

export function LoginModalBody() {
  return (
    <form className="login-form">

      <div className="input-field">
        <label className="input-field-title">Email</label>
        <div>
          <input
            type="email"
            className="login-input input-field"
          //   onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      Password
      <div>
        <input
          type="password"
          className="login-input input-field"
        //   onChange={(e) => setPassword(e.target.value)}
        />
      </div>

    </form>
  );
}

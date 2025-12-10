import "../../CSS/Modal.css"

export function SignUpModalBody() {
  return (
    <form className="login-form">

      <p className="input-field-title">Email</p>
      <div>
        <input
          type="email"
          className="login-input input-field"
        //   onChange={(e) => setEmail(e.target.value)}
        />
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

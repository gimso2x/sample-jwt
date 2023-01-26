const SignUp = () => {
  return (
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto">
      <div className="card-body">
        <h2 className="card-title">Join</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-secondary">Join</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp

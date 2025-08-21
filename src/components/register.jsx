import "./register.css";
function Register() {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
            <div
                className="card p-4"
                style={{ maxWidth: "350px", width: "100%" }}
            >
                <div className="text-center mb-3 brand-logo">WonderGram</div>

                <p className="text-center text-muted small">
                    Sign up to see photos and videos from your friends.
                </p>

                {/* Social Login */}
                <div className="d-grid mb-2">
                    <button className="btn btn-primary btn-sm">
                        <i className="bi bi-facebook me-1"></i> Log in with
                        Facebook
                    </button>
                    <button className="btn btn-primary btn-sm">
                        <i className="bi bi-google me-1"></i> Log in with
                        Google
                    </button>
                </div>

                {/* Divider */}
                <div className="divider small text-muted">OR</div>

                {/* Registration Form */}
                <form>
                    <div className="mb-2">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Mobile Number or Email"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            minLength="6"
                            required
                        />
                    </div>
                    <div className="d-grid mt-3">
                        <button
                            type="submit"
                            className="btn btn-primary btn-sm"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="text-muted small text-center mt-3">
                    By signing up, you agree to our <strong>Terms</strong>,{" "}
                    <strong>Privacy Policy</strong> and{" "}
                    <strong>Cookies Policy</strong>.
                </p>
            </div>

            {/* Login Redirect */}
            <div
                className="card p-3 text-center mt-3"
                style={{ maxWidth: "350px", width: "100%" }}
            >
                <p className="mb-0 small">
                    Have an account? <a href="#">Log in</a>
                </p>
            </div>

            {/* App Store Links (optional like Instagram) */}
            <div className="text-center mt-3">
                <p className="small mb-1">Get the app.</p>
                <div className="d-flex justify-content-center gap-2">
                    <img
                        src="https://img.icons8.com/?size=100&id=63788&format=png&color=000000"
                        alt="App Store"
                        height="40"
                    />
                    <img
                        src="https://img.icons8.com/?size=100&id=L1ws9zn2uD01&format=png&color=000000"
                        alt="Google Play"
                        height="40"
                    />
                </div>
            </div>
        </div>
    );
}

export default Register;

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return(
        <div className="d-flex bg-primary align-items-center justify-content-center vh-100">
            <div className="p-3 rounded bg-white w-25">
                <form>
                    <h2>Login</h2>
                    <div className="mb-3">
                        <label><strong>Username</strong></label>
                        <input type="text" placeholder="Enter username" name='name' className='form-control rounded-0 border border-dark'/>
                    </div>
                    <div className="mb-3">
                        <label><strong>Password</strong></label>
                        <input type="password" placeholder="Enter password" name='password' className='form-control rounded-0 border border-dark'/>
                    </div>
                    <button className='w-100 btn btn-success rounded-0'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
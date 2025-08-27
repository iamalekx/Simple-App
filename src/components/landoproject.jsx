import "./landoproject.css";
import { Button } from './button'
import landing from '../images/landing1.png'

export function LandoProject() {
    return (
        <div className="w-100">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid navv">
                    <div className="left-nav d-flex align-items-center gap-5">
                        <p className="fw-bolder m-0 fs-1">Lando</p>
                        <a href="#" className="fs-5 fw-bold active">
                            Home
                        </a>
                        <a href="#" className="fs-5 fw-bold">
                            Pricing
                        </a>
                        <a href="#" className="fs-5 fw-bold">
                            About us
                        </a>
                        <a href="#" className="fs-5 fw-bold">
                            Contact us
                        </a>
                    </div>
                    <div className="right-nav d-flex align-items-center gap-2">
                        <a href="#" className="fs-5 m-0 fw-bold">
                            Log in
                        </a>
                        <Button className="fw-bold">Sign Up</Button>
                    </div>
                </div>
            </nav>
            <section className="body-cont row d-flex my-5 text-start">
                <div className="left-body d-flex flex-column justify-content-start col-12 col-md-6">
                    <p className="fs-5 fw-bold text-secondary">
                        - FREE 30 DAYS TRIAL
                    </p>
                    <h1 className="fw-bolder project_heading">
                        The best way to showcase your project
                    </h1>
                </div>
                <div className="right-body d-flex align-items-center justify-content-center col-12 col-md-6">
                    <img className="img-fluid" src={landing} alt="" />
                </div>
            </section>
        </div>
    );
}

// export default LandoProject;

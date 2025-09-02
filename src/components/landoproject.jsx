import "./landoproject.css";
import { Button } from "./button";
import landing from "../images/landing1.png";
import apple from "../logos/apple.png";
import amazon from "../logos/social.png";
import microsoft from "../logos/microsoft.png";
import behance from "../logos/behance.png";
import huawei from "../logos/huawei.png";
import spotify from "../logos/spotify.png";
import wordpress from "../logos/wordpress.png";
import js from "../logos/js.png";
import nike from "../logos/nike.png";


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
            <section className="body-cont row d-flex my-4 text-start">
                <div className="left-body d-flex flex-column justify-content-start col-12 col-md-6 gap-4">
                    <p className="fs-5 fw-bold text-secondary">
                        - FREE 30 DAYS TRIAL
                    </p>
                    <h1 className="fw-bolder project_heading">
                        The best way to showcase your project
                    </h1>
                    <h2 className="fs-4 fw-bold">
                        Here you can put a short description about your project
                    </h2>
                    <div className="try d-flex gap-5">
                        <Button className="try_free fw-bold">
                            Try for free
                        </Button>
                        <Button className="see_how_it_works fw-bold">
                            See how it works
                        </Button>
                    </div>
                </div>
                <div className="right-body d-flex align-items-center justify-content-center col-12 col-md-6">
                    <img className="img-fluid" src={landing} alt="" />
                </div>
            </section>
            <footer className="d-flex flex-column align-items-center justify-content-center">
                <p className="fs-5 fw-bold footer_description">
                    Trusted by individuals and teams at the world's best
                    companies
                </p>
                <div className="logo-scroll-container">
                    <div className="d-flex gap-5 logo-scroll">
                        <img src={apple} alt="apple" />
                        <img src={js} alt="js" className="rounded-circle" />
                        <img
                            src={spotify}
                            alt="spotify"
                            className="rounded-circle"
                        />
                        <img
                            src={amazon}
                            alt="amazon"
                            className="rounded-circle"
                        />
                        <img src={microsoft} alt="microsoft" />
                        <img src={behance} alt="behance" />
                        <img src={huawei} alt="huawei" />
                        <img src={nike} alt="nike" className="rounded-circle" />
                        <img
                            src={wordpress}
                            alt="wordpress"
                            className="rounded-circle"
                        />

                        {/* duplicate for scrolling */}
                        <img src={apple} alt="apple" />
                        <img src={js} alt="js" className="rounded-circle" />
                        <img
                            src={spotify}
                            alt="spotify"
                            className="rounded-circle"
                        />
                        <img
                            src={amazon}
                            alt="amazon"
                            className="rounded-circle"
                        />
                        <img src={microsoft} alt="microsoft" />
                        <img src={behance} alt="behance" />
                        <img src={huawei} alt="huawei" />
                        <img src={nike} alt="nike" className="rounded-circle" />
                        <img
                            src={wordpress}
                            alt="wordpress"
                            className="rounded-circle"
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
}

// export default LandoProject;

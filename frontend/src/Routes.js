import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './contents/Home';
import About from './contents/About';
import Blog from './contents/Blog';
import Pages from './contents/Pages';
import CSVTest from './pages/Csvtest';
import AgeGroups from './pages/Agegroups';

function RoutesComponent() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">Sample App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#home" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="home">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/blog" className="nav-link">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/pages" className="nav-link">Pages</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/pages" element={<Pages />} />
                    <Route path="/csvtest" element={<CSVTest />} />
                    <Route path="/agegroup" element={<AgeGroups />} />
                </Routes>
            </div>
        </Router>
    );
}

export default RoutesComponent;
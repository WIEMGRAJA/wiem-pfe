import React, { useState } from 'react';
import { RiBarChartFill, RiBootstrapLine, RiCameraFill, RiCodeSSlashLine, RiCss3Line, RiHtml5Line, RiJavascriptLine, RiLineChartLine, RiPencilLine, RiReactjsLine, RiSettings2Line } from 'react-icons/ri';
import '../styles/trainer.css'
import picImage from '../images/pic-1.jpg';
const topCategories = ['Development', 'Business', 'Design', 'Photography', 'Marketing', 'Software']; // Updated array of top categories

const Home = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'Shaikh Anas',
        email: 'anas@example.com',
        phoneNumber: '123-456-7890'
    });

    const handleViewProfile = () => {
        setShowProfile(true);
    };

    return (
        <div className="Home">
            <header className="header">
                <section className="flex">
                    <a href="/" className="logo">Educa</a>
                    <form action="" method="post" className="search-form">
                        <input type="text" name="search-box" placeholder="search courses.." required maxLength="100" />
                        <button type="submit" className="fas fa-search" name="search_box"></button>
                    </form>
                    <div className="profile">
                        <img src={picImage} alt="Login" />
                        <h3>{profileData.name}</h3>
                        <span>student</span>
                        <button onClick={handleViewProfile} className="btn">View profile</button>
                        {/* Conditionally render the profile information */}
                        {showProfile && (
                            <div className="profile-info">
                                <p><strong>Name:</strong> {profileData.name}</p>
                                <p><strong>Email:</strong> {profileData.email}</p>
                                <p><strong>Phone Number:</strong> {profileData.phoneNumber}</p>
                            </div>
                        )}
                        <div className="flex-btn">
                            <a href="/" className="option-btn">login</a>
                            <a href="/" className="option-btn">register</a>
                        </div>
                    </div>
                </section>
            </header>
            <div className="side-bar">
                <div className="close-side-bar">
                    <i className="fa fa-times"></i>
                </div>
                <div className="profile">
                    {/* <img src={picImage} alt="" /> */}
                    <h3>shaikh anas</h3>
                    <span>Trainer</span>
                    <button onClick={handleViewProfile} className="btn">View profile</button>
                </div>
                <nav className="navbar">
    <span><strong>Name:</strong> {profileData.name}</span>
    <span><strong>Email:</strong> {profileData.email}</span>
    <span><strong>Phone Number:</strong> {profileData.phoneNumber}</span>
</nav>


            </div>
            <section className="quick-select">
                <h1 className="heading">quick options</h1>
                <div className="box-container">
                
                    <div className="box">
                        <h3 className="title">Top Categories</h3>
                        <div className="category-buttons">
                            {topCategories.map((category, index) => (
                                <button key={index} className="category-button">
                                    {category === 'Development' && <RiCodeSSlashLine style={{ marginRight: '0.5em' }} />}
                                    {category === 'Business' && <RiBarChartFill style={{ marginRight: '0.5em' }} />}
                                    {category === 'Design' && <RiPencilLine style={{ marginRight: '0.5em' }} />}
                                    {category === 'Photography' && <RiCameraFill style={{ marginRight: '0.5em' }} />}
                                    {category === 'Marketing' && <RiLineChartLine style={{ marginRight: '0.5em' }} />}
                                    {category === 'Software' && <RiSettings2Line style={{ marginRight: '0.5em' }} />}
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="box">
                        <h3 className="title">Popular Topics</h3>
                        <div className="topic-buttons">
                            <button className="topic-button"><RiHtml5Line style={{ marginRight: '0.5em' }} />HTML</button>
                            <button className="topic-button"><RiCss3Line style={{ marginRight: '0.5em' }} />CSS</button>
                            <button className="topic-button"><RiJavascriptLine style={{ marginRight: '0.5em' }} />JavaScript</button>
                            <button className="topic-button"><RiReactjsLine style={{ marginRight: '0.5em' }} />React</button>
                            <button className="topic-button"><RiBootstrapLine style={{ marginRight: '0.5em' }} />Bootstrap</button>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                
            </footer>
        </div>
    );
};

export default Home;

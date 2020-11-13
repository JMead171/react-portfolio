import React from 'react';

function About() {
    return (
        <section>
            <div className="about">
                <h3>About Me</h3>
                <div className="about-info">
                    <img src={require("../../assets/images/PhotoJM.jpg")} alt="" />
                    <div className='about-text'>
                        <p>Full-Stack Developer looking for new opportunities in Financial Technologies.
                        Experienced in Software Development, Business Operations and Management.
                        I was a mainframe computer programmer many years ago, coding in COBOL and CICS. It was
                        something that
                        I loved to do. Then I made a career change into Business Management and Operations,
                        which helped me developed extensive business management experience. I recently had an
                        opportunity to
                        go back to computer programming, so I took it. Computer programming is my first love and
                        I am now
                        pursuing a position in software development with a professional organization. I am
                        looking for an
                        organization that will challenge me and use my diverse talents and skills. I believe I
                        can make a
                        positive difference and improve any organization if given a chance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
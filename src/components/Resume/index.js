import React from 'react';

function Resume(props) {
    return (
      <section className='prof'>
        <h3><a href={require("../../assets/images/jmresume.pdf")} rel="noopener noreferrer" target="_blank"><button className='resume'>Click for Resume</button></a></h3>
        <h2>Front-End Proficiencies</h2>
        <ul className="front-end">
        {props.frontEnd.map(item => (
          <li className="frontEnd-list" key={item.id}>
            {item.name}
          </li>
        ))}
        </ul>
        <h2>Back-End Proficiencies</h2>
        <ul className="front-end">
        {props.backEnd.map(item => (
          <li className="frontEnd-list" key={item.id}>
            {item.name}
          </li>
        ))}
        </ul>
      </section>
    );
  }
  
  export default Resume;
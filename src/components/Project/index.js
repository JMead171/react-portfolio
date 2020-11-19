import React from 'react';

const Project = () => {

  const photos = [    
    {
      id: '1',
      name: 'Professional Portfolio',
      description: 'This is my first professional portfolio app, I created this app when I first started to learn HTML5 and CSS!',
      github: 'https://github.com/JMead171/professional-portfolio',
      deployed: 'https://jmead171.github.io/professional-portfolio',
    },
    {
      id: '2',
      name: 'Vitual Office',
      description: 'This is an office app that integrates appointments, meetings and messages to help an office improve efficiencies.',
      github: 'https://github.com/JMead171/vo-coordinator',
      deployed: 'https://vo-coordinator.herokuapp.com',
    },
    {
      id: '3',
      name: 'Tech Blog',
      description: 'This is a tech blog where users can write about their favorite tech subjects, other users can post comments.',
      github: 'https://github.com/JMead171/tech-blog',
      deployed: 'https://arcane-oasis-62399.herokuapp.com',
    },
    {
      id: '4',
      name: 'Weather Dashboard',
      description: 'This is a weather app that allows users to enter a city to find the current weather and a five day forecast.',
      github: 'https://github.com/JMead171/weather-dashboard',
      deployed: 'https://jmead171.github.io/weather-dashboard',
    },
    {
      id: '5',
      name: 'Workday Scheduler',
      description: 'This is a simple calendar app that lets a user enter appointments in time blocks which are color coded.',
      github: 'https://github.com/JMead171/workday-scheduler',
      deployed: 'https://jmead171.github.io/workday-scheduler',
    },
    {
      id: '6',
      name: "What's Your Beef",
      description: 'This is a food ecommerce site that allows users to order food, place in a shopping cart and checkout.',
      github: 'https://github.com/JMead171/whats-your-beef',
      deployed: 'https://salty-island-84425.herokuapp.com',
    }
  ];


  return (
    <div>
      <div className="images-grid">
        {photos.map((image, i) => (
          <div className='project-list' key={image.id}>
            <p className='text'>{image.name}</p>
            <p className='description'>{image.description}</p>
            <img
              src={require(`../../assets/images/${i+1}.jpg`)}
              alt={image.name}
              className="images"
            />
            <a href={image.github} rel="noopener noreferrer" target="_blank"><button>GitHub</button></a>
            <a href={image.deployed} rel="noopener noreferrer" target="_blank"><button>LIVE</button></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
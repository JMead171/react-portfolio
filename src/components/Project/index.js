import React from 'react';

const Project = () => {

  const photos = [    
    {
      id: '1',
      name: 'Professional Portfolio',
      github: 'https://github.com/JMead171/professional-portfolio',
      deployed: 'https://jmead171.github.io/professional-portfolio',
    },
    {
      id: '2',
      name: 'Vitual Office',
      github: 'https://github.com/JMead171/vo-coordinator',
      deployed: 'https://vo-coordinator.herokuapp.com',
    },
    {
      id: '3',
      name: 'Tech Blog',
      github: 'https://github.com/JMead171/tech-blog',
      deployed: 'https://arcane-oasis-62399.herokuapp.com',
    },
    {
      id: '4',
      name: 'Weather Dashboard',
      github: 'https://github.com/JMead171/weather-dashboard',
      deployed: 'https://jmead171.github.io/weather-dashboard',
    },
    {
      id: '5',
      name: 'Workday Scheduler',
      github: 'https://github.com/JMead171/workday-scheduler',
      deployed: 'https://jmead171.github.io/workday-scheduler',
    },
    {
      id: '6',
      name: "What's Your Beef",
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
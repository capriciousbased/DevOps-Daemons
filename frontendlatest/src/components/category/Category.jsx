import React, { Component } from 'react';
import DualCrossCarousel from './DualCrossCarousel';

class Category extends Component {
  state = {
    items: [
        { 
            id: 1,
            image: 'src/assets/images/Plan.jpg',
            title: 'Plan',
            description: 'Gut geplant ist halb gewonnen'
        },
        {   
            id: 2,
            image: 'src/assets/images/Code.jpg',
            title: 'Code',
            description: 'Entwickeln und Optimieren'
        },
        { 
            id: 3,
            image: 'src/assets/images/Test.jpg',
            title: 'Test',
            description: 'Fehler aufspüren und beheben'
        },
        { 
            id: 4,
            image: 'src/assets/images/Plan.Build',
            title: 'Build',
            description: 'ompiliere und erschaffe Artefakte'
        },
        { 
            id: 5,
            image: 'src/assets/images/Release.jpg',
            title: 'Release',
            description: 'Zur Welt bringen'
        },
        { 
            id: 6,
            image: 'src/assets/images/Deploy.jpg',
            title: 'Deploy',
            description: 'Live und bereit'
        },
        { 
            id: 7,
            image: 'src/assets/images/Operate.jpg',
            title: 'Operate',
            description: 'immer verfügbar'
        },
        { 
            id: 8,
            image: 'src/assets/images/Monitor.jpg',
            title: 'Monitor',
            description: 'Alles im Blick'
        }
    ],
  };

  render() {
    return (
      <div>
        <h2>Category</h2>
        <DualCrossCarousel items={this.state.items} />
      </div>
    );
  }
}

export default Category;

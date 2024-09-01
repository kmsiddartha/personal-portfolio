import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Travel Diary - Trip Manager Web Application',
      description: [
        'Developed a MERN Stack web application, Travel Diary, that allows users to create, manage, and share their travel experiences through personal account creation.',
        'Created the frontend using the React framework and the backend with Node.js, leveraging MongoDB for database management.',
        'Integrated Google Firebase for efficient and secure storage of trip-related media.',
        'Deployed the full-stack web application on the Render cloud-based hosting platform on https://Travel-Diary.com.',
      ],
      imgUrl: projImg1,
    },
    {
      title:
        'Optimizing Seizure Classification using Spectrograms and Deep Learning Models',
      description: [
        'Identified the common EEG channels across all available montages in the TUH EEG seizure dataset (v2.0.1), encompassing data from 528 patients.',
        'Preprocessed the signals using band-pass filters and segmented for seizure occurrences.',
        'Extracted channel-specific spectrograms using STFT, MFC, and CWT methods for each patient session and trained 3D CNN, RNN, and LSTM models for seizure classification.',
        'Achieved the best accuracy of 82.18% for seizure classification using MFC spectrograms and CNN architecture.',
      ],
      imgUrl: projImg2,
    },
    {
      title: 'KnowMe - Showcase Your Journey',
      description: [
        'Developed a full-stack web application, KnowMe, designed to simplify portfolio management and help users present their skills and experiences by signing up and showcasing their professional journey to potential recruiters.',
        'The frontend is built using the React framework, and the backend is developed with Node.js to handle server-side logic and API requests.',
        'Integrated the app with Email.js to facilitate direct communication between users and recruiters.',
      ],
      imgUrl: projImg3,
    },
    {
      title: 'Starbucks Customer Segmentation for Enhanced Marketing',
      description: [
        'Consolidated and cleaned three datasets with 300k+ entries and performed EDA, Feature engineering, and PCA.',
        'Employed the K-means algorithm to cluster 17k+ customers, determining an optimal number of clusters using the Silhouette score and Sum of Squared Errors. Inferred key demographic traits for each cluster based on member characteristics.',
        'Analyzed clusters using t-SNE to determine the most effective approaches for delivering customer promotional offers.',
      ],
      imgUrl: projImg3,
    },
    {
      title: 'Consumer Retention via Churn Prediction',
      description: [
        'Unified and processed a Telecom dataset, ensuring data cleanliness and transformations where necessary. Conducted in-depth EDA, engineered features, applied PCA, and employed SMOTE-ENN to balance the class distribution.',
        'Accomplished a best f1-score of 0.85 using the Random Forest Classifier, among other classifiers, for churn prediction.',
        'Executed targeted strategies that could bolster customer loyalty and drive revenue growth through customer retention.',
      ],
      imgUrl: projImg2,
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Project 3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='fourth'>Project 4</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='fifth'>Project 5</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          <ProjectCard {...projects[0]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <Row>
                          <ProjectCard {...projects[1]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <Row>
                          <ProjectCard {...projects[2]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='fourth'>
                        <Row>
                          <ProjectCard {...projects[3]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='fifth'>
                        <Row>
                          <ProjectCard {...projects[4]} />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        src={colorSharp2}
        alt='Background'
      />
    </section>
  );
};

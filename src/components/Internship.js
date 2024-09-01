import colorSharp from '../assets/img/color-sharp.png';

export const Internship = () => {
  return (
    <section className='internship' id='internship'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='internship-bx wow zoomIn'>
              <h2>Internship Experience</h2>
              <div className='internship-details'>
                <h3>
                  Research Scholar | Computational Neuroscience & AI Lab, IIT
                  BHU
                </h3>
                <p>
                  <strong>Jan ’22 - Jun ’24</strong>
                </p>
                <ul>
                  <li>
                    Developed and trained machine learning and deep learning
                    models using the PARAM Shivay supercomputing facility on
                    openly available MRI and EEG datasets and real-world data
                    collected in the laboratory.
                  </li>
                  <li>
                    Worked on projects involving the prediction of Autism
                    Spectrum Disorder using brain region functional connectivity
                    and seizure type classification in epilepsy patients using
                    spectrogram techniques and deep learning.
                  </li>
                  <li>
                    Authored and submitted research papers to international
                    conferences and journals based on these works.
                  </li>
                </ul>
              </div>
              <div className='internship-details'>
                <h3>Data Scientist | Twilearn Edutech</h3>
                <p>
                  <strong>Jun ’23 - Jul ’23</strong>
                </p>
                <ul>
                  <li>
                    Developed a hybrid chatbot for users, utilizing rule-based
                    and AI-based approaches to enhance user experience.
                  </li>
                  <li>
                    Conducted comprehensive research through surveys to identify
                    potential user queries. Adeptly employed prompt engineering
                    techniques to create diverse conversational variations of
                    the identified questions.
                  </li>
                  <li>
                    Utilized NLP for preprocessing data, implemented
                    bidirectional LSTM layers enhanced with an attention
                    mechanism.
                  </li>
                  <li>
                    Attained an accuracy of 88% in developing a proficient and
                    effective chatbot with accurate communication capabilities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className='background-image-left'
        src={colorSharp}
        alt='Background'
      />
    </section>
  );
};

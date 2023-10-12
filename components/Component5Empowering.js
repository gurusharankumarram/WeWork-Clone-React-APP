import React from 'react';
import './Component5Empowering.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Component5Empowering = () => {
  return (
    <div className="Component5Container">

      <div className="Component5ContainerText">
        <div className="Component5ContainerText1">
          <h2>Empowering tomorrow’s world at work</h2>
          <p>
            For over a decade, we’ve been leading the future of flexible work.
            From freelancers to Fortune 500s, we’re helping our members reimagine
            the ways they work.
          </p>
        </div>
        <div className="Component5ContainerTextViewMore">
          View more <FontAwesomeIcon icon={faArrowRight} />
        </div>

      </div>

      <div className="Component5ContainerCards">

        <div className="Component5ContainerCard">
          <img src="https://ctfassets.imgix.net/vh7r69kgcki3/6RWiW6nRjE0Opu3rMrmyNA/46e4a7a7cec8a942949693ef532f6012/logo_microsoft.png?auto=format%20compress&fit=crop&q=50&w=100" alt="Microsofr" />
        </div>
        <div className="Component5ContainerCard">
          <img src="https://ctfassets.imgix.net/vh7r69kgcki3/557AtRn8tgjcVnmrXM5dPK/c6cc549473c56a285007f57a57b4bd94/pfizer.png?auto=format%20compress&fit=crop&q=50&w=100" alt="Pfizer" />
        </div>
        <div className="Component5ContainerCard">
          <img src="https://ctfassets.imgix.net/vh7r69kgcki3/6ucfeSUkXAQhX3LvdjHaL4/53586fbd893593b8ce3b2c3904160cd9/samsung.png?auto=format%20compress&fit=crop&q=50&w=100" alt="Samsung" />
        </div>
        <div className="Component5ContainerCard">
          <img src="https://ctfassets.imgix.net/vh7r69kgcki3/4UwH80gQwn4Bzsgsppp6oc/fb1ddac85d9a2724a124114933713917/Salesforce_logo.png?auto=format%20compress&fit=crop&q=50&w=100" alt="Salesforce" />
        </div>
        <div className="Component5ContainerCard">
          <img src="https://ctfassets.imgix.net/vh7r69kgcki3/3f7ZKaZZF7tSAQfCA7Zs8P/41ea5b9545b4f293661db6cf95c80d78/visa.png?auto=format%20compress&fit=crop&q=50&w=100" alt="VISA" />
        </div>
        <div className="Component5ContainerCard">
          <img src="https://ctfassets.imgix.net/vh7r69kgcki3/2UDkm4Ldvxo5l1cdbNrGXn/8d4b43b9e9dd33b966b94304a130dc32/zoom.png?auto=format%20compress&fit=crop&q=50&w=100" alt="ZOOM" />
        </div>

      </div>

      <div className="Component5ContainerCardsMobile">

        <div className="Component5ContainerCardsMobiles">
          <div className="Component5ContainerCardMobile">
            <img src="https://ctfassets.imgix.net/vh7r69kgcki3/6RWiW6nRjE0Opu3rMrmyNA/46e4a7a7cec8a942949693ef532f6012/logo_microsoft.png?auto=format%20compress&fit=crop&q=50&w=100" alt="Microsofr" />
          </div>
          <div className="Component5ContainerCardMobile">
            <img src="https://ctfassets.imgix.net/vh7r69kgcki3/557AtRn8tgjcVnmrXM5dPK/c6cc549473c56a285007f57a57b4bd94/pfizer.png?auto=format%20compress&fit=crop&q=50&w=100" alt="Pfizer" />
          </div>
        </div>

        <div className="Component5ContainerCardsMobiles">
          <div className="Component5ContainerCardMobile">
            <img src="https://ctfassets.imgix.net/vh7r69kgcki3/6ucfeSUkXAQhX3LvdjHaL4/53586fbd893593b8ce3b2c3904160cd9/samsung.png?auto=format%20compress&fit=crop&q=50&w=100" alt="Samsung" />
          </div>
          <div className="Component5ContainerCardMobile">
            <img src="https://ctfassets.imgix.net/vh7r69kgcki3/4UwH80gQwn4Bzsgsppp6oc/fb1ddac85d9a2724a124114933713917/Salesforce_logo.png?auto=format%20compress&fit=crop&q=50&w=100" alt="Salesforce" />
          </div>
        </div>

        <div className="Component5ContainerCardsMobiles">
          <div className="Component5ContainerCardMobile">
            <img src="https://ctfassets.imgix.net/vh7r69kgcki3/3f7ZKaZZF7tSAQfCA7Zs8P/41ea5b9545b4f293661db6cf95c80d78/visa.png?auto=format%20compress&fit=crop&q=50&w=100" alt="VISA" />
          </div>
          <div className="Component5ContainerCardMobile">
            <img src="https://ctfassets.imgix.net/vh7r69kgcki3/2UDkm4Ldvxo5l1cdbNrGXn/8d4b43b9e9dd33b966b94304a130dc32/zoom.png?auto=format%20compress&fit=crop&q=50&w=100" alt="ZOOM" />
          </div>
        </div>
      </div>
      <div className="Component5ContainerTextViewMoreMobile">
        View more <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
};

export default Component5Empowering;

import React, { useState } from 'react';

import './insturen.styles.scss';

const Insturen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState();

  return (
    <div className="insturen">
      <div className="title">Hoe u ons kan helpen</div>
      <div className="section">
        <div className="text">
          <div className="title">1. We zoeken muren.</div>
          <div className="paragraph">
            Muren die geschikt zijn om teksten van Haarlemse schrijvers en
            dichters te plaatsen. Weet u een geschikte muur? Of bent u eigenaar
            van een geschikte muur? Meld het ons. We hebben wat door Haarlem
            gedwaald en hebben al veel mooie plekken gevonden.
          </div>
          <div className="title">
            2. We zoeken suggesties voor teksten of gedichten.
          </div>
          <div className="paragraph">
            Het kan een tekst zijn, een quote. Een aforisme. Een gedicht, of een
            gedeelte uit een gedicht. Heeft u een idee? Heeft u een favoriete
            tekst? Laat het ons weten. Speciaal welkom zijn teksten die een
            relatie hebben met een specifieke locatie in Haarlem. We zullen de
            suggesties, indien u dat wenst, op deze website plaatsen. Zodat het
            voor iedereen zichtbaar is.
          </div>
        </div>
        <div className="image">
          <img
            src={
              process.env.PUBLIC_URL + '/images/pexels-cottonbro-4738075.jpg'
            }
            alt="haarlemse muren"
            className="walls-image"
          />
        </div>
      </div>
      <hr />
      <div className="contact">
        <div className="title">Contact</div>
        <div className="paragraph">
          U kan uw suggesties voor muren en gedichten insturen via dit contact
          formulier.
        </div>
        <div className="form">
          <label>
            <div className="label">Naam:</div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <div className="label">E-mail adres:</div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <div className="label">Onderwerp:</div>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
          <label>
            <div className="label">Inhoud:</div>
            <textarea
              type="textarea"
              value={content}
              rows="7"
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <label>
            <div className="text">
              Als u eventueel een foto wil toevoegen van de muur kan dat hier:
            </div>
            <div className="wrapper">
              <div className="upload-label">Toevoegen</div>
              <input
                type="file"
                className="upload"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <div className="image">preview image</div>
            </div>
          </label>
          <button onClick={() => console.log(name, email, content, image)}>
            Versturen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insturen;

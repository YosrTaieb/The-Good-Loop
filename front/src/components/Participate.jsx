import '../styles/participate.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Result = () => {
  return (
    <>
      <p className="text-xs text-center mb-5">
        Votre message a bien été envoyé. Toute l&apos;équipe THEGOODLOOP vous
        remercie.{' '}
      </p>
    </>
  );
};
const Participate = () => {
  const [result, setResult] = useState(false);
  const [jesuisunemarque, setJesuisunemarque] = useState(true);
  const [jerecommandeunemarque, setJerecommandeunemarque] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_plgahli',
        'template_xv5pyjj',
        e.target,
        'user_PKl7P8UzMVvNkS1k1nzyW'
      )
      .then(() => {
        setResult(true);
      });
    e.target.reset();
  };

  setTimeout(() => {
    setResult(false);
  }, 6000);

  const onSelectMarque = () => {
    setJesuisunemarque(true);
    setJerecommandeunemarque(false);
  };

  const onSelectParticipate = () => {
    setJesuisunemarque(false);
    setJerecommandeunemarque(true);
  };

  return (
    <div className="participateContent">
      <div className="participateDiv">
        <div className="participateTexte text-center">
          <div className="participateTitle">
            <h1 className="participateH1 mt-1 text-center w-full z-10 ">
              Participer au projet
            </h1>
            <div className="z-0" id="circle"></div>
            <div className="z-5" id="transparent"></div>
          </div>
          <p className="participateTexte my-3 pt-4 mt-6">
            Nous sommes toujours à la recherche de nouvelles marques. <br />
            N&apos;hésitez pas à nous en recommander et faites vous même parti
            du cercle.
          </p>
        </div>
        <form className="w-full max-w-full p-4" onSubmit={sendEmail}>
          <div className="participateSelection mb-8">
            <div className="participateSelect ">
              <input
                id="jesuisunemarque"
                name="to_name"
                onClick={onSelectMarque}
                autoComplete="off"
                defaultValue={jesuisunemarque ? 'Je suis une marque' : ''}
                className={
                  jesuisunemarque
                    ? 'participateCircle yellowTrue'
                    : 'participateCircle black'
                }
              ></input>

              <p className="participateSelectionTexte italic">
                Je suis une marque
              </p>
            </div>
            <div className="participateSelect">
              <input
                id="jerecommandeunemarque"
                name="to_name"
                defaultValue={
                  jerecommandeunemarque ? 'Je recommande une marque' : ''
                }
                autoComplete="off"
                onClick={onSelectParticipate}
                className={
                  jerecommandeunemarque
                    ? 'participateCircle yellowTrue'
                    : 'participateCircle black'
                }
              ></input>

              <p className="participateSelectionTexte italic">
                Je veux recommander une marque
              </p>
            </div>
          </div>
          <div className="formulaireContent">
            <div className="participateMarqueEmail flex flex-wrap -mx-3 mb-6 ">
              <div className="cercle w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                <input
                  className="inputForm appearance-none block w-full bg-white text-gray-700 rounded-lg py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-marque"
                  type="text"
                  name="name"
                  placeholder="nom de la marque"
                  required="required"
                  autoComplete="off"
                />
              </div>

              <div className="cercle w-full md:w-1/2 px-3">
                <input
                  className="inputForm appearance-none block w-full bg-white text-gray-700 rounded-lg py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  name="user_email"
                  placeholder="votre email"
                  required="required"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea
                  className="inputForm appearance-none block w-full h-60 bg-white text-gray-700 text rounded-lg py-6 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-message"
                  type="text"
                  name="message"
                  placeholder="votre message"
                  required="required"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="participateRow text-align">
              {result ? <Result /> : null}
            </div>
            <div className="flex flex-row-reverse">
              <button
                className="participateButton bg-white hover:bg-gray-100 text-black font-medium py-3 px-4 w-60"
                type="submit"
                value="Send"
              >
                ENVOYER
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Participate;

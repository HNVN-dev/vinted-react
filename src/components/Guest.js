import { useState } from "react";
import { Link } from "react-router-dom";
import SignupOrLoginModal from "./SignupOrLoginModal";
import LoginModal from "./LoginModal";

import appleIcon from "../assets/img/apple-icon.png";
import googleIcon from "../assets/img/google-icon.png";
import facebookIcon from "../assets/img/facebook-icon.png";

const Guest = ({
  isOpen,
  setIsOpen,
  openOrClose,
  wantToLog,
  setWantToLog,
  setUser,
  token,
}) => {
  // <Guest /> is actually in Header.js, here you can pass props.
  const [nextStepAcc, setNextStepAcc] = useState(false);
  // to hold the user cases in the modal
  // If he already got an account & click "Se connecter" => next page
  // If finaly he doesn't have an account & click "s'inscrire" => Previous

  const closeAndClose = () => {
    // Close the modal if clicked outside
    // Reset the modal's state

    openOrClose();
    setNextStepAcc(false);
    setWantToLog(false);
  };

  const openLoginModal = () => {
    // Where the user can click if he got an email to log
    setWantToLog(true);
  };

  const nextStep = () => {
    // Hold the modal comportment

    if (!nextStepAcc) {
      setNextStepAcc(true);
    } else {
      setNextStepAcc(false);
    }
  };

  return (
    <>
      <button className="signup" onClick={openOrClose}>
        S'inscrire | Se connecter
      </button>
      <SignupOrLoginModal open={isOpen}>
        <div className="signin-signup-overlay" onClick={closeAndClose}>
          <div
            className="signin-signup-container"
            onClick={(event) => {
              event.stopPropagation();
              // stop openOrClose propagation, so clicking in the container won't close him
              // only clicking outside or in the close btn will, with closeAndClose.
            }}
          >
            <button className="close-btn" onClick={closeAndClose}>
              X
            </button>
            {!nextStepAcc ? (
              <h2>
                Rejoins le mouvement de la seconde main et vends sans frais !
              </h2>
            ) : (
              <h2>Bienvenue !</h2>
            )}
            <div className="signup-buttons">
              <div className="btn-signin-line"></div>
              <button className="signin-btn">
                <img
                  src={facebookIcon}
                  alt="facebook icon"
                  className="signin-facebook-icon"
                />
                Continuer avec Facebook
              </button>
              <button className="signin-btn">
                <img
                  src={googleIcon}
                  alt="google icon"
                  className="signin-google-icon"
                />{" "}
                Continuer avec Google
              </button>
              <button className="signin-btn">
                <img
                  src={appleIcon}
                  alt="apple icon"
                  className="signin-apple-icon"
                />{" "}
                Continuer avec Apple
              </button>
            </div>

            {!nextStepAcc ? (
              <div className="signup-or-alrealdy">
                <div className="signup-with-email">
                  Ou inscris-toi avec
                  <span className="signup-email-link" onClick={openOrClose}>
                    <Link to="/signup">E-mail</Link>
                  </span>
                </div>

                <div className="registered-already">
                  Tu as déjà un compte ?
                  <span className="login-with-link" onClick={nextStep}>
                    Se connecter
                  </span>
                </div>
              </div>
            ) : (
              <div className="signup-or-alrealdy">
                <div className="login-with-email">
                  Ou connecte-toi avec
                  <span className="signup-email-link" onClick={openLoginModal}>
                    E-mail
                  </span>
                </div>
                {wantToLog && (
                  <LoginModal
                    wantToLog={wantToLog}
                    setWantToLog={setWantToLog}
                    openLoginModal={openLoginModal}
                    closeAndClose={closeAndClose}
                    setUser={setUser}
                    token={token}
                  />
                )}

                <div className="back-to-signup">
                  Tu n'as pas de compte Vinted ?
                  <span className="signup-email-line" onClick={nextStep}>
                    S'inscrire
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </SignupOrLoginModal>
    </>
  );
};

export default Guest;

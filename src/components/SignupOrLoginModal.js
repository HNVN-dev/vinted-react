const SignupOrLoginModal = ({ open, children }) => {
  // in Guest.js & Logged.js, props passed in Header.js

  /* DON'T MIND IF THERE'S MULTIPLE PATTERN MODALS
   I DID IT TO TRY DIFFERENT FORMULA IN DIFFERENT SITUATIONS
   IN REAL PROJECT, THE MORE PRACTICAL WOULD TO CHOOSE 1 OR 2 STYLES AND
   KEEP THE SAME PATTERN TO ALL THE PROJECT
  */

  if (!open) return null;
  return <div>{children}</div>;
};

export default SignupOrLoginModal;

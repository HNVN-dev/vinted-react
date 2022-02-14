const SignupOrLoginModal = ({ open, children }) => {
  // in Guest.js & Logged.js, props passed in Header.js

  if (!open) return null;
  return <div>{children}</div>;
};

export default SignupOrLoginModal;

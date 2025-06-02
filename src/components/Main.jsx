import PropTypes from "prop-types";

function Main({ children }) {
  return <main className="app">{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;

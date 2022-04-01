import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="welcome-message">
        <h2>Welcome to NASA,</h2>
        <h2>{name}!</h2>
        <h3>Your application request was received successfully! An e-mail has been sent for instructions🚀</h3>
        <ToastContainer theme="dark" />
      </div>
    </motion.div>
  );
};

export default Dashboard;

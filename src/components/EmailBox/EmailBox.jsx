import "./EmailBox.css";
import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";
import { containerVariant } from "@/src/utils/animations";

const Email = () => {
  return (
    <motion.div
      initial={{
        width: ".5rem",
        borderRadius: "100%",
      }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        },
      }}
      className="emailbox"
    >
      {/* icon */}
      <motion.div
        variants={containerVariant(0.6)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once:true,
        }}
      >
        <LuMail size={30} color="grey" />
      </motion.div>

      {/* input */}
      <motion.input
      variants={containerVariant(0.8)}
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{
        once:true,
      }}
       type="email" placeholder="" enter email />

      <motion.div
      variants={containerVariant(0.9)}
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{
        once:true,
      }}
       className="getfunded">Get-Funded</motion.div>
    </motion.div>
  );
};

export default Email;

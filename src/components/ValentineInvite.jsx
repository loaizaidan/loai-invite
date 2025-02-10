import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import "../styles.css";

export default function ValentineInvite() {
  const [opened, setOpened] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    setNoPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  return (
    <div className="container">
      <AnimatePresence>
        {!accepted && (
          <motion.div className="card" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            {!opened ? (
              <motion.div className="envelope" onClick={() => setOpened(true)} whileTap={{ scale: 0.9 }}>
                📩 Tap to Open
              </motion.div>
            ) : (
              <div className="message">
                <p className="valentine-text">Will you be my valentine?</p>
                <div className="buttons">
                  <button className="yes" onClick={() => setAccepted(true)}>Yes</button>
                  <motion.div animate={{ x: noPosition.x, y: noPosition.y }} transition={{ type: "spring", stiffness: 100 }}>
                    <button className="no" onClick={moveNoButton}>No</button>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {accepted && (
          <motion.div className="love-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            I love you Sham ❤️
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {accepted && (
          <div className="hearts">
            {[...Array(20)].map((_, i) => (
              <motion.div key={i} className="heart" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: -200 }} exit={{ opacity: 0 }} transition={{ duration: 3, delay: i * 0.2 }} style={{ left: `${Math.random() * 100}%`, width: "24px", height: "24px" }}>
                <Heart size={24} />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

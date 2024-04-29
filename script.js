import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const items = [
  { id: 1, title: 'Image 1', subtitle: 'Subtitle 1', imageUrl: 'image1.jpg' },
  { id: 2, title: 'Image 2', subtitle: 'Subtitle 2', imageUrl: 'image2.jpg' },
  // Add more items as needed
];

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div>
      {items.map(item => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
          style={{ cursor: 'pointer' }}
        >
          <img src={item.imageUrl} alt={item.title} />
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.img src={selectedItem.imageUrl} alt={selectedItem.title} />
            <motion.h5>{selectedItem.subtitle}</motion.h5>
            <motion.h2>{selectedItem.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
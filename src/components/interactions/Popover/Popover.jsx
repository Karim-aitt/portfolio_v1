import { useState } from 'react';
import popover from './Popover.module.css'; // Importa tu archivo de estilos CSS

const Popover = () => {
  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <div>
      <button onClick={togglePopover} className={popover.button}>Haz clic para popover</button>
      {showPopover && (
        <div className={popover.content}>
          <p>Este es el contenido del popover.</p>
          <button onClick={togglePopover}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default Popover;
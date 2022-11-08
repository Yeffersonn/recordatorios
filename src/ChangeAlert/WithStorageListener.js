import { useState } from "react";

const WithStoragerListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {

    const [storageChange, setStorageChange] = useState(false);
    window.addEventListener('storage', (change) => {
        if(change.key === 'TODOS_V1'){
            console.log(change.key)
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        props.sincronized();
        setStorageChange(false);
    }

    return (
      <WrappedComponent show={storageChange} toggleShow={toggleShow} />
    );
  };
};

export { WithStoragerListener };

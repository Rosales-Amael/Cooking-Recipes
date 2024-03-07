import { Spinner } from '@chakra-ui/react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader_container">
      <Spinner
        id="loader"
        thickness="8px"
        speed="0.8s"
        emptyColor="gray.200"
        color="gray.500"
        size="xl"
      />
    </div>
  );
};

export default Loader;

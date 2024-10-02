import LoadingSpinner from '@/components/ui/loading-spinner';
import { createRef, useEffect, useImperativeHandle, useState } from 'react';
import LoadingLinear from './ui/loading-linear';

export const loaderRef = createRef();

interface LoaderProps {
  className?: string;
  enableScroll?: boolean;
  linearItemClassName?: string;
  variant?: 'circular' | 'linear';
}

const Loader: React.FC<LoaderProps> = ({ className, enableScroll = false, linearItemClassName, variant = 'circular' }) => {
  const [counter, setCounter] = useState(0);
  const incLoader = () => {
    setCounter(x => x + 1);
  };

  const decLoader = () => {
    setCounter(x => x - 1);
  };

  useImperativeHandle(loaderRef, () => ({
    incLoader,
    decLoader,
  }), []);

  // loader çıktığı zaman kullanıcı ekranda gezinememesi için scroll iptal edildi tercihe göre değiştirilebilir.
  useEffect(() => {
    if (!enableScroll) {
      if (counter > 0) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-auto');
      }
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [counter, enableScroll]);

  return (
    counter > 0 && (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {variant === 'circular'
          ? (
            <div className="z-9999 backdrop-brightness-50 dark:backdrop-brightness-75 flex justify-center items-center h-screen w-screen fixed top-0 left-0">
              <LoadingSpinner className={className} />
            </div>
          )
          : (
            <div className="z-9999 backdrop-brightness-50 dark:backdrop-brightness-75 h-screen w-screen fixed top-0 left-0">
              <LoadingLinear linearContainerClassName={className} linearItemClassName={linearItemClassName} />
            </div>
          )}
      </>
    )
  );
};

export default Loader;

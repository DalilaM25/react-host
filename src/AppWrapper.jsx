import { useRef, useEffect } from 'react';
import App from 'vue_remote/App';
import { createApp } from 'vue';

export const AppWrapper = ({ mfName }) => {
  const containerRef = useRef();

  useEffect(() => {
    const vueApp = createApp(App);
    vueApp.mount(containerRef.current);

    return () => {
      vueApp.unmount();
    };
  }, []);
  return <div ref={containerRef} id={`mf-${mfName}`}></div>;
};

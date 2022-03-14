import React from 'react';
import {useEffect, useState} from 'react';
import {init} from './init';
import {render} from './render';
import {Loader} from '../components/loader';
import {Page500} from '../components/error/errorPage/500';

export const App = () => {
  const [app, setApp] = useState<JSX.Element>(
    <Loader loading={true} backdrop={false} />
  );

  useEffect(() => {
    init()
      .then(({bootstrap, config}) => {
        const container = bootstrap.getDiContainer();
        const router = bootstrap.getRouter();
        const ui = config.getUI();
        router.start(() => setApp(render(container, router, ui)));
      })
      .catch((err) => {
        console.error('start app error', err);
        setApp(<Page500 />);
      });
  }, []);

  return app;
};

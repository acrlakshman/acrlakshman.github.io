import React, { FunctionComponent } from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

import { Basics } from '../../../types/profileWeb';

interface ComponentProps {
  basics: Basics;
}

const Footer: FunctionComponent<React.PropsWithChildren<ComponentProps>> = (
  props: React.PropsWithChildren<ComponentProps>
) => {
  return (
    <>
      <section className="content-section">
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="content">
            <AiOutlineCopyrightCircle />
            &nbsp;{new Date().getFullYear()}&nbsp;
            {props.basics.name.value}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

import React, { FunctionComponent } from 'react';

interface Props {
  id: string
}

const Content: FunctionComponent<Props> = (props) => {
  return (
    <section id={props.id} className="content-section">
      <div className="container bg-light border rounded shadow-sm main-container">
        <div className="content">{props.children}</div>
      </div>
    </section>
  );
};

export default Content;

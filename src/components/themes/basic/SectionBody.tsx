import React from 'react';

interface Props {
  class: string
  value: string
}

const SectionBody = (props: Props): JSX.Element => {
  return (
    <div className="content-body">
      <div className={props.class}>
        {props.value}
      </div>
    </div>
  );
};

export default SectionBody;

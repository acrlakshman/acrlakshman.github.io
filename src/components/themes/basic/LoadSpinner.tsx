import React from 'react';
import { Spinner } from 'react-bootstrap';
import Content from './Content';
import Divider from './SectionDivider';
import SectionLabel from './SectionLabel';

const LoadSpinner = ({
  above,
  below,
  label = '',
}: {
  above?: boolean;
  below?: boolean;
  label?: string;
}) => {
  console.log(`above: ${above}; below: ${below}`);
  return (
    <Content id={'spinner'}>
      {above && <Divider />}
      <SectionLabel label={label} />
      {below && <Divider />}
      <Spinner animation="border" />
    </Content>
  );
};

export default LoadSpinner;

import React, { useState } from 'react';
import { style } from 'typestyle';
import { Box } from '../../components/Box';
import { InputDate } from '../../components/Inputs/InputDate';
import { InputSelect } from '../../components/Inputs/InputSelect';
import { InputText } from '../../components/Inputs/InputText';
import { InputTextarea } from '../../components/Inputs/InputTextarea';
import { Layout } from '../../components/Layout';
import { InputNumber } from '../../components/Inputs/InputNumber';

const container = style({
  width: '100%',
  padding: '2em'
});

const wrapper = style({
  padding: '2em'
});

const InputsExample: React.FC = () => {
  const [number, setNumber] = useState(2);

  return (
    <Layout>
      <div className={container}>
        <Box>
          <div className={wrapper}>
            <InputText label="lol" />
            <InputTextarea label="lol" />
            <InputDate label="lol" />
            <InputSelect />
            <InputNumber label="InputNumber" value={number} onChange={setNumber} />
          </div>
        </Box>
      </div>
    </Layout>
  );
};

export default InputsExample;

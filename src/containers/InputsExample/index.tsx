import React, { useState } from 'react';
import { style } from 'typestyle';
import { Box } from '../../components/Box';
import { InputDate } from '../../components/Inputs/InputDate';
import { InputSelect } from '../../components/Inputs/InputSelect';
import { InputText } from '../../components/Inputs/InputText';
import { InputTextarea } from '../../components/Inputs/InputTextarea';
import { Layout } from '../../components/Layout';
import { InputNumber } from '../../components/Inputs/InputNumber';
import { InputNumberFormatted } from '../../lib';

const container = style({
  width: '100%',
  padding: '2em'
});

const wrapper = style({
  padding: '2em'
});

const InputsExample: React.FC = () => {
  const [number, setNumber] = useState(2);
  const [numberMax, setNumberMax] = useState(2);
  const [numberFormatted, setNumberFormatted] = useState(2);
  const [numberFormattedMax, setNumberFormattedMax] = useState(2);

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
            <InputNumber label="InputNumber with Max" value={numberMax} onChange={setNumberMax} max={999} />
            <InputNumberFormatted
              label="InputNumberFormatted"
              value={numberFormatted}
              onChange={setNumberFormatted}
              max={999}
            />
            <InputNumberFormatted
              label="InputNumberFormatted With max value"
              value={numberFormattedMax}
              onChange={setNumberFormattedMax}
              max={999}
            />
          </div>
        </Box>
      </div>
    </Layout>
  );
};

export default InputsExample;

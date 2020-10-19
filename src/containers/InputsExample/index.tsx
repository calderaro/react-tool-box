import * as React from 'react';
import { style } from 'typestyle';
import { Box } from '../../components/Box';
import Button from '../../components/Button';
import { InputDate } from '../../components/Inputs/InputDate';
import { InputSelect } from '../../components/Inputs/InputSelect';
import { InputText } from '../../components/Inputs/InputText';
import { InputTextarea } from '../../components/Inputs/InputTextarea';
import { Layout } from '../../components/Layout';

const container = style({
  width: '100%',
  padding: '2em'
});

const wrapper = style({
  padding: '2em'
});

const InputsExample: React.FC = () => (
  <Layout>
    <div className={container}>
      <Box>
        <div className={wrapper}>
          <InputText label="lol" />
          <InputTextarea label="lol" />
          <InputDate label="lol" />
          <InputSelect />
          <Button>Save</Button>
        </div>
      </Box>
    </div>
  </Layout>
);

export default InputsExample;

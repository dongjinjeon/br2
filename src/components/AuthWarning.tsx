import React from 'react';
import { Box } from 'grommet';
import { Title } from './Base/components/Title';

export const AuthWarning = () => (
  <Box pad={{ horizontal: 'large', top: 'large' }}>
    <Title>Use OSIRIS Browser MettaWallet </Title>
    <div>
      <p>
        Looks like you don't have the OSIRIS wallet browser installed yet. Head over to{' '}
        <a href="https://mettawallet.osiris.app/" target="_blank" rel="noreferrer noopener">
          osiris
        </a>{' '}
        to quickly install the browser.
      </p>
    </div>
  </Box>
);

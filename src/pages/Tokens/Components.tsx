import { Box, BoxProps } from 'grommet';
import cn from 'classnames';
import * as styles from './styles.styl';
import { Text } from 'components/Base/components/Text';
import * as React from 'react';
import { EXCHANGE_MODE } from 'stores/interfaces';
import { observer } from 'mobx-react';
import { useStores } from '../../stores';
import { formatWithSixDecimals } from '../../utils';

// export const OperationType = (props: { type: EXCHANGE_MODE }) => {
//   return (
//     <Box
//       direction={props.type === EXCHANGE_MODE.TO_SCRT ? 'row' : 'row-reverse'}
//       align="center"
//       className={cn(styles.operationType)}
//       margin={{ left: '20px' }}
//     >
//       <Box direction="row" align="center">
//         <img className={styles.imgToken} style={{ height: 20 }} src="/static/eth.svg" />
//         <Text size="medium">ETH</Text>
//       </Box>
//       <Box direction="row" margin={{ horizontal: 'xsmall' }} align="center">
//         <img src="/static/right.svg" />
//       </Box>
//       <Box direction="row" align="center">
//         <img className={styles.imgToken} style={{ height: 18 }} src="/static/scrt.svg" />
//         <Text size="medium">ONE</Text>
//       </Box>
//     </Box>
//   );
// };

export const Price = observer((props: { value: number; isEth: boolean; boxProps?: BoxProps }) => {
  const { user, userMetamask } = useStores();

  return (
    <Box direction="column" align="end" justify="center" pad={{ right: 'medium' }} {...props.boxProps}>
      <Text style={{ fontSize: 14 }}>{`${props.value} ${props.isEth ? 'ETH' : 'SCRT'}`}</Text>
      <Text size="xsmall" color="rgba(102, 102, 102, 0.9)">
        ${formatWithSixDecimals(props.value * (props.isEth ? userMetamask.getNetworkPrice() : user.scrtRate))}
      </Text>
    </Box>
  );
});

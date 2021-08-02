export const enum NETWORKS {
  ETH = 'ETH',
  BSC = 'BSC',
  PLSM = 'PLSM',
}

export const networkFromToken = (token: { src_network: string; dst_network?: string }): NETWORKS => {
  switch (token.src_network.toLowerCase().replace(/\s/g, '')) {
    case 'ethereum':
      return NETWORKS.ETH;
    case 'binancesmartchain':
      return NETWORKS.BSC;
    case 'plasm':
      return NETWORKS.PLSM;
    case 'secret':
      if (token?.dst_network && token?.dst_network !== 'secret') {
        return networkFromToken({ src_network: token.dst_network });
      } else {
        return undefined;
      }
    default:
      throw new Error(`Invalid network: ${token.src_network}`);
  }
};

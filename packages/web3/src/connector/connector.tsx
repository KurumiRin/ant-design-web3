import React from 'react';
import { ConnectModal } from '@ant-design/web3';
import type { Chain, ConnectorTriggerProps, Wallet } from '@ant-design/web3-common';
import { message } from 'antd';

import useProvider from '../hooks/useProvider';
import type { ConnectorProps } from './interface';

export const Connector: React.FC<ConnectorProps> = (props) => {
  const {
    children,
    modalProps,
    onConnect,
    onConnected,
    onDisconnect,
    onDisconnected,
    onChainSwitched,
  } = props;
  const {
    availableWallets,
    connect,
    disconnect,
    account,
    availableChains,
    chain,
    switchChain,
    balance,
    addressPrefix,
  } = useProvider(props);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const connectWallet = async (wallet?: Wallet) => {
    onConnect?.();
    try {
      setLoading(true);
      await connect?.(wallet);
      onConnected?.();
      setOpen(false);
    } catch (e: any) {
      messageApi.error(e.message);
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (!React.isValidElement(children)) {
    console.error('"children" property of the "Connector" is must be a React element');
    return null;
  }

  return (
    <>
      {contextHolder}
      {React.cloneElement(children as React.ReactElement<ConnectorTriggerProps>, {
        account,
        onConnectClick: () => {
          setOpen(true);
        },
        onDisconnectClick: () => {
          setLoading(true);
          onDisconnect?.();
          disconnect?.().then(() => {
            onDisconnected?.();
            setLoading(false);
          });
        },
        balance,
        availableChains,
        chain,
        addressPrefix,
        onSwitchChain: async (c: Chain) => {
          await switchChain?.(c);
          onChainSwitched?.(c);
        },
        loading,
        ...children.props,
      })}

      <ConnectModal
        open={open}
        walletList={availableWallets}
        onWalletSelected={async (wallet) => {
          if (!wallet.getQrCode) {
            // not need show qr code, hide immediately
            setOpen(false);
          }
          await connectWallet(wallet);
        }}
        {...modalProps}
        onCancel={(e) => {
          modalProps?.onCancel?.(e);
          setOpen(false);
          setLoading(false);
        }}
      />
    </>
  );
};

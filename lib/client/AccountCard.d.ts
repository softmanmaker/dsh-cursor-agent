import React from 'react';
import type { Translate } from './locales';
import type { AccountStatus, CursorRpc } from './types';
export declare function AccountCard({ rpc, t, account, setAccount, onSignedOut, }: {
    rpc: CursorRpc;
    t: Translate;
    account?: AccountStatus;
    setAccount: (next: AccountStatus) => void;
    onSignedOut: () => void;
}): React.JSX.Element;

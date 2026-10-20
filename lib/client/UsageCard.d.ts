import React from 'react';
import { type Translate } from './locales';
import type { CursorRpc } from './types';
export declare function UsageCard({ rpc, t, signedIn, resetKey, }: {
    rpc: CursorRpc;
    t: Translate;
    signedIn: boolean;
    resetKey: number;
}): React.JSX.Element;

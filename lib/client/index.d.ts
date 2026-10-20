import { en, zh, type LocaleKey } from './locales';
import type { CursorRpc } from './types';
export declare const inject: string[];
interface ClientContext {
    effect: (fn: () => void | (() => void), name: string) => void;
    locale: {
        register: (ns: string, dict: {
            zh: typeof zh;
            en: typeof en;
        }) => () => void;
        bind: (ns: string) => (key: LocaleKey) => string;
    };
    get: (name: string) => {
        rpc: CursorRpc;
    } | undefined;
    slots: {
        inject: (slot: string, factory: () => unknown) => void;
        register: (meta: Record<string, unknown>, component: unknown) => unknown;
    };
}
export declare function apply(ctx: ClientContext): void;
export {};

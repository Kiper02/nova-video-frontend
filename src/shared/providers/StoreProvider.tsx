"use client"

import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

export function StoreProvider({children}: PropsWithChildren<unknown>) {
    return <Provider store={store}>{children}</Provider>   
}

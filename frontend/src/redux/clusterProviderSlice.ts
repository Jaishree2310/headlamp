/*
 * Copyright 2025 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DialogProps {
  cluster: any;
  openConfirmDialog: string;
  setOpenConfirmDialog: (value: string) => void;
}

export interface MenuItemProps {
  cluster: any;
  handleMenuClose: () => void;
  setOpenConfirmDialog: (value: string) => void;
}

export type DialogComponent = (props: DialogProps) => React.ReactElement | null;
export type MenuItemComponent = (props: MenuItemProps) => React.ReactElement | null;

/**
 * Information about a cluster provider, that is shown on the add cluster page.
 */
export interface ClusterProviderInfo {
  /** The title of the provider. */
  title: string;
  /** An icon component, an imported SVG. */
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  /** Description of the provider. Explaining a bit about what it is. */
  description: string;
  /** Url for where the Add button should go to. */
  url: string;
}

export interface ClusterProviderSliceState {
  /** Dialog components that can be rendered by the application, on the Home. */
  dialogs: DialogComponent[];
  /** Menu items that can be rendered by the application, on the Home page in the cluster action menu. */
  menuItems: MenuItemComponent[];
  /** Cluster providers for the Add Cluster page. */
  clusterProviders: ClusterProviderInfo[];
}

export const initialState: ClusterProviderSliceState = {
  menuItems: [],
  dialogs: [],
  clusterProviders: [],
};

const clusterProviderSlice = createSlice({
  name: 'clusterProviderSlice',
  initialState,
  reducers: {
    addDialog(state, action: PayloadAction<DialogComponent>) {
      state.dialogs.push(action.payload);
    },
    addMenuItem(state, action: PayloadAction<MenuItemComponent>) {
      state.menuItems.push(action.payload);
    },
    addAddClusterProvider(state, action: PayloadAction<ClusterProviderInfo>) {
      state.clusterProviders.push(action.payload);
    },
  },
});

export const { addDialog, addMenuItem, addAddClusterProvider } = clusterProviderSlice.actions;

export default clusterProviderSlice.reducer;

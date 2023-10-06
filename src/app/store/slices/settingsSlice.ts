import deepMerge from 'lodash/merge'
import { createSlice } from '@reduxjs/toolkit'

type RecursivePartial<T> = {
  [P in keyof T]?:
    T[P] extends (infer U)[] ? RecursivePartial<U>[] :
    T[P] extends object ? RecursivePartial<T[P]> :
    T[P];
};

const initialState = {
  ldm: true
}

type InitialState = typeof initialState

const settingsSlice = createSlice({
  name: 'settings',
  initialState: JSON.parse(JSON.stringify(initialState)) as InitialState,
  reducers: {
    mergeSettings(state, action: {
      payload: RecursivePartial<typeof initialState>
    }) {
      state = deepMerge(state, action.payload)
    }
  }
})

export const {
  reducer: settingsReducer,
  actions: settingsActions
} = settingsSlice
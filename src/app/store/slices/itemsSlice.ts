import { createSlice } from '@reduxjs/toolkit'

const uuid = () => self.crypto.randomUUID()
const item = (props: { from?: number } = {}) => ({
  id: uuid(),
  imageURL: '/images/skins/AK47_Vulcan.png',
  title: 'AK47 Vulcan',
  subtitle: 'SUB AK47 Vulcan',
  tags: ['Редкое', 'Горячее Оружие'],
  from: 0 || props?.from
})

export interface IItem {
  id: string
  title: string
  subtitle: string
  imageURL: string
  tags?: string[]
  from?: number
}

const initialState = {
  value: [
    {
      type: 'item',
      value: {
        id: uuid(),
        imageURL: '/images/skins/M4A4_Dawn.png',
        title: 'M4A4 Dawn',
        subtitle: 'SUB M4A4 Dawn',
        tags: ['Редкое', 'Горячее Оружие'],
        from: 1
      }
    },
    {
      type: 'progress',
      value: {
        id: uuid(),
        from: 0,
        to: 100,
        items: [
          item(), item(), item(), item(), item()
        ]
      }
    },
    {
      type: 'item',
      value: {
        id: uuid(),
        imageURL: '/images/skins/AK47_Vulcan.png',
        title: 'AK47 Vulcan',
        subtitle: 'SUB AK47 Vulcan',
        tags: ['Редкое', 'Горячее Оружие'],
        from: 100
      }
    },
    {
      type: 'progress',
      value: {
        id: uuid(),
        from: 100,
        to: 4500,
        items: [
          item(), item(), item(), item(), item()
        ]
      }
    },
    {
      type: 'item',
      value: {
        id: uuid(),
        imageURL: '/images/skins/butterfly-knife.png',
        title: 'Нож - Бабочка',
        subtitle: 'SUB Нож - Бабочка',
        tags: ['Редкое', 'Холодной оружие'],
        from: 4500
      }
    }
  ] as {
    type: 'item' | 'progress'
    value: IItem & {
      to?: number,
      items?: IItem[]
    }
  }[]
}

type InitialState = typeof initialState

const itemsSlice = createSlice({
  name: 'items',
  initialState: JSON.parse(JSON.stringify(initialState)) as InitialState,
  reducers: {

  }
})

export const {
  reducer: itemsReducer,
  actions: itemsActions
} = itemsSlice
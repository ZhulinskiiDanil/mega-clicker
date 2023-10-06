import { IItem, RootState } from "@/app/store"

type ItemsType = RootState["items"]["value"]

function getItemFrom(
  index: number, from: number, to: number, length: number
) {
  const fromToDiff = Math.abs(from - to)

  return Math.floor(
    from + (index + 1) / (length + 1) * fromToDiff
  )
}

function destructItems(
  items: ItemsType
): (IItem & { from: number })[] {
  const result = []

  for (let i in items) {
    const item = items[i]

    if (item.type === "item") {
      result.push(item.value)
    } else if (item.type === "progress") {
      const itemTo = item.value.to || 0
      const itemFrom = item.value.from || 0
      const itemsLength = (item.value.items || []).length

      for (let index in (item.value.items || [])) {
        const innerItem = JSON.parse(JSON.stringify((item.value.items || [])[i]))
        const from = getItemFrom(parseFloat(index), itemFrom, itemTo, itemsLength)

        innerItem.from = from
        result.push(innerItem)
      }
    }
  }

  return result
}

type ItemWithFromTo = {
  prev: (IItem & { from: number }) | null,
  next: (IItem & { from: number }) | null
}

export function findItemByClicks(
  items: ItemsType, clicks: number
): ItemWithFromTo {
  const result = destructItems(items)

  for (let i = result.length - 1; i >= 0; i--) {
    const item = result[i]

    if (clicks >= item?.from) {
      return {
        prev: result[i + 1] ? item : result[i - 1] || null,
        next: result[i + 1] || item
      }
    } else if (clicks < 1) {
      return {
        prev: null,
        next: result[0]
      }
    }
  }

  return {
    prev: null, next: null
  }
}
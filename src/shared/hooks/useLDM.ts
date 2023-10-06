import { RootState } from "@/app/store"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { settingsActions } from "@/app/store"

export function useLDM() {
  const dispatch = useDispatch()
  const ldm = useSelector((state: RootState) => state.settings.ldm)

  return {
    ldm,
    toggle() {
      dispatch(
        settingsActions.mergeSettings({
          ldm: !ldm
        })
      )
    }
  }
}
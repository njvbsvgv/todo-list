import type { FC } from "react"
import type { TFormBtn } from "../../core/types/TFormBtn"

const BtnItems: FC<TFormBtn> = ({handleReset}) => {
  return (
    <div className="btn-control flex gap-x-4 mt-4">
      <button type="submit" className="btn bg-green-600">Add</button>
      <button type="reset" className="btn bg-red-600" onClick={handleReset}>Remove</button>
    </div>
  )
}

export default BtnItems

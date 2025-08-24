import type { FC } from "react"
import type { TTitle } from "../../core/types/TTitle"

const Title: FC<TTitle> = ({ title, bgColor, textColor }) => {
  return (
    <div className="w-full py-2" style={{background: bgColor}}>
      <h1 className="text-center text-3xl" style={{color: textColor}}>{title}</h1>
      {/* <hr /> */}
    </div>
  )
}

export default Title

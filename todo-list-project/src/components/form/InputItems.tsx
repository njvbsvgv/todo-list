import type { FC } from "react";
import { addFormData } from "../../core/constant";
import type { TFormInput } from "../../core/types/TFormInput";
import type { MyFormValues } from "../../core/types/TFormValues";

const InputItems: FC<TFormInput<MyFormValues>> = ({ formik }) => {
  return (
    <div>
      <div className="inputs-control flex flex-col gap-y-3.5">
        {addFormData.map((item, index: number) => {
          return (
            <div className={`${item.parentClassName} mt-3`} key={index}>
              <h4 className="indent-1 text-[17px]">{item.title}</h4>
              <input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                className="outline-0 border-0 bg-gray-600 px-2 py-1 w-full rounded-xl
                  placeholder:text-gray-300 text-white mt-2"
                value={formik.values[item.value as keyof MyFormValues]}
                onChange={formik.handleChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputItems;

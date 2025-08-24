import { useFormik } from "formik";
import Title from "../common/Title";
import InputItems from "./InputItems";
import BtnItems from "./BtnItems";
import { validation } from "../../core/validation/addTodoFormValidation";
import type { MyFormValues } from "../../core/types/TFormValues";
import { AddTask } from "../../core/utility/model/addTask";
import { taskDataBase } from "../../core/constant";
import type { FC } from "react";
import type { TTaskData } from "../../core/types/TTaskData";

interface TAddTodoForm {
  setTaskState: any;
}

const AddTodoForm: FC<TAddTodoForm> = ({ setTaskState }) => {
  const formik = useFormik<MyFormValues>({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      console.log("formik values ==>", values);
      const newTask = new AddTask(
        values.title,
        values.description,
        false,
        taskDataBase
      );
      const newData = newTask.addDataToTaskDataBase();
      console.log("new dataBase ==>", newData);
      setTaskState((prev: TTaskData[]) => [...newData]);
    },
  });

  return (
    <div className="add-todo-form-control w-full flex justify-center mt-3">
      <form
        action=""
        className="w-4/5 border rounded-2xl p-5"
        onSubmit={formik.handleSubmit}
      >
        <Title title="todo list form" textColor="black" bgColor="transparent" />
        <InputItems formik={formik} />
        <BtnItems />
      </form>
    </div>
  );
};

export default AddTodoForm;

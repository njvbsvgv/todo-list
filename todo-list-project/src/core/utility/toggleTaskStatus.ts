import type { TTaskData } from "../types/TTaskData";

export const toggleTaskStatus = (id: number, taskDataArray: TTaskData[]) => {
  const filterData = taskDataArray.find((el: TTaskData) => el.id === id);
  const index = taskDataArray.findIndex((el: TTaskData) => el.id === id);
  if (filterData) {
    // const newData = { ...filterData, isCompleted: !filterData?.isCompleted };
    taskDataArray[index].isCompleted = !taskDataArray[index].isCompleted
    console.log("newDataBase ==>", taskDataArray);
    return taskDataArray;
  }
};
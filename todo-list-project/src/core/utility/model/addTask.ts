import type { TTaskData } from "../../types/TTaskData";

export class AddTask {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  taskData: TTaskData[];
  constructor(
    title: string,
    description: string,
    isCompleted: boolean,
    taskData: TTaskData[]
  ) {
    (this.id = taskData.length + 1),
      (this.title = title),
      (this.description = description),
      (this.isCompleted = isCompleted);
    this.taskData = taskData;
  }
  addDataToTaskDataBase = (): TTaskData[] => {
    const newTask = {
      id: this.id,
      title: this.title,
      description: this.description,
      isCompleted: this.isCompleted,
    };
    this.taskData.push(newTask);
    return this.taskData;
  };
}

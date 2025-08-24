import { useState } from "react";
import Card from "../components/common/Card";
import Title from "../components/common/Title";
import AddTodoForm from "../components/form/AddTodoForm";
import { taskDataBase } from "../core/constant";
import type { TTaskData } from "../core/types/TTaskData";
import { toggleTaskStatus } from "../core/utility/toggleTaskStatus";

const List = () => {
  const [taskState, setTaskState] = useState<TTaskData[] | null>(taskDataBase)

  const cardClickHandler = (id: number) => {
    if (taskState) {
      const newData = toggleTaskStatus(id, taskState)
      console.log("toggeled the task status ==>", newData)
      if (newData) setTaskState(() => [...newData])
    }
  }

  return (
    <div
      className="w-2/4 h-[700px] border border-gray-400 rounded-2xl
      mt-4 shadow-[0_1px_10px_#ADADAD] overflow-hidden"
    >
      <Title title="Todo List" bgColor="black" textColor="white" />
      <AddTodoForm setTaskState={setTaskState} />
      <div className="task-list-container p-2 mt-2">
        <div className="task-list-control max-h-[300px] p-4 overflow-y-auto flex flex-col items-center gap-y-5">
          {taskState?.map((item: TTaskData, index: number) => {
            return (
              <Card
                key={index}
                onClik={() => cardClickHandler(item.id)}
                title={item.title}
                description={item.description}
                isCompleted={item.isCompleted}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;

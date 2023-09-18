import { ITask } from "../types/task";

export function sortTask(items: ITask[], indexFrom: number, indexTo: number) {
  const copyItems = Array.from(items);
  const [reorderedItem] = copyItems.splice(indexFrom, 1);
  copyItems.splice(indexTo, 0, reorderedItem);
  return copyItems;
}
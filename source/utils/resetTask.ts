import { Dispatch, SetStateAction } from "react";

export function resetTask(close: () => void, text: Dispatch<SetStateAction<string>>, date: Dispatch<SetStateAction<string>>, time: Dispatch<SetStateAction<string>>) {
  close();

  text('');
  date('');
  time('');
}
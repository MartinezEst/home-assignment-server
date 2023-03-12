import { SportEvent } from './SportEvent.interface';

export interface Message {
  type: string;
  payload?: SportEvent;
}

export interface Idker {
  text: string;
  count: number;
  type: DkerType[];
  info?: string;
  prefix?: string;
  suffix?: string;
}
export enum DkerType {
  morning = 'morning',
  evening = 'evening',
  afterPrayers = 'afterPrayers',
  sleep = 'sleep'
}

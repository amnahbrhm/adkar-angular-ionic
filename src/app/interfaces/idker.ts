export interface Idker {
  text: string;
  count: number;
  info?: string;
  type: DkerType[];
}
export enum DkerType {
  morning = 'morning',
  evening = 'evening'
}

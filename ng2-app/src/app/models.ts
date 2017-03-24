
export interface IEntries {
  count: number,
  next: string,
  previous: boolean,
  results: IEntry[]
}

export interface IEntry {
  title: string,
  body: string,
  created_at: any,
  updated_at: any,
}

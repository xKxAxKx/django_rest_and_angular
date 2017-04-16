export interface IEntries {
  count: any,
  next: any,
  previous: any,
  results: IEntry[]
}

export interface IEntry {
  title: string,
  body: string,
  created_at: any,
  updated_at: any
}

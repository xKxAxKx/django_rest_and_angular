export interface IEntries {
  count: any,
  next: any,
  previous: any,
  results: IEntries[]
}

export interface IEntry {
  title: string,
  body: string,
  created_at: string,
  updated_at: string,
}

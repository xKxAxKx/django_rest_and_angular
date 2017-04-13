export interface IEntries {
  count: any,
  next: any,
  previous: any,
  results: IResults[]
}

export interface IResults {
  title: string,
  body: string,
  created_at: any,
  updated_at: any
}

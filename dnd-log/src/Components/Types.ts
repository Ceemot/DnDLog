export interface Logbook {
    Logs: Log[]
  }
  
  export interface Log {
    LogId: number
    Title: string
    Location: string
    Entities: string[]
    Description: string
  }
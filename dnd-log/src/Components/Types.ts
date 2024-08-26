export interface Logbook {
  logs: Log[];
}

export interface Log {
  logId: number;
  title: string;
  location: string;
  entities: string[];
  description: string;
}

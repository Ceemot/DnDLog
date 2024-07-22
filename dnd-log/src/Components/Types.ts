type Logbook = {
    Logs: Log[];
};

type Log = {
    LogId: Number;
    Title: String;
    Location: String;
    Entities: String[];
    Desription: String;
}
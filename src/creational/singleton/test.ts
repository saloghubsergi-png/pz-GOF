class Database {
  private static instance: Database;

  private constructor() {}

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  connect() {
    console.log("Connected to DB");
  }
}

export {};

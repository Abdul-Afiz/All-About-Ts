// implementing TypeScript with classes

interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

interface PersistDB {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

// "protected" will allow field to be accessible from child but not modifiable

class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

// creating an instance of class in TypeScript with extends and implements

class PersistenceMemoryDb extends InMemoryDatabase implements PersistDB {
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDb = new PersistenceMemoryDb();
myDb.set("foo", "bar");

console.log(myDb.get("foo"));
const saved = myDb.saveToString();
// myDb.db["foo"] = "baz";
myDb.set("foo", "db1-bar");
console.log(myDb.get("foo"));

const myDb2 = new PersistenceMemoryDb();
myDb2.restoreFromString(saved);
console.log(myDb2.get("foo"));

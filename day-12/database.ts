// implementing TypeScript with classes

interface Database<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface PersistDB {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

// "protected" will allow field to be accessible from child but not modifiable

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

// creating an instance of class in TypeScript with extends and implements

class PersistableMemoryDb<T, K extends DBKeyType>
  extends InMemoryDatabase<T, K>
  implements PersistDB
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDb = new PersistableMemoryDb<number, string>();
myDb.set("foo", 22);

console.log(myDb.get("foo"));
const saved = myDb.saveToString();
// myDb.db["foo"] = "baz";
myDb.set("foo", 23);
console.log(myDb.get("foo"));

const myDb2 = new PersistableMemoryDb<number, string>();
myDb2.restoreFromString(saved);
console.log(myDb2.get("foo"));

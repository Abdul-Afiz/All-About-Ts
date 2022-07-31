function Logger() {
  return (str: string) => {
    console.log(str);
  };
}

const logger = Logger();
logger("log me in");

function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = "";
    log(str: string) {
      console.log(str);
      this.completeLog += str + "\n";
    }
    dumpLog() {
      return this.completeLog;
    }
  };
}

const myLogger = createLoggerClass();
const logger2 = new myLogger();

logger2.log("Foo");
console.log(logger2.dumpLog());

// creating generic class using function

function CreateSimpleMemoryDB<T>() {
  return class SimpleMemoryDB {
    private db: Record<string, T> = {};
    //value setter
    set(id: string, v: T) {
      this.db[id] = v;
    }
    //value getter
    get(id: string): T {
      return this.db[id];
    }
    //get all db value
    getObj(): object {
      return this.db;
    }
  };
}

const stringDb = CreateSimpleMemoryDB<string>();

const sdb1 = new stringDb();

sdb1.set("a", "hello");

//creating a mixin

type Constructor<T> = new (...arg: any[]) => T;

function Dumpable<T extends Constructor<{ getObj(): object }>>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObj());
    }
  };
}

const dumbableStrDb = Dumpable(stringDb);

const sdb2 = new dumbableStrDb();

sdb2.set("dump", "Dump down");
sdb2.set("dum", "Dum down");
sdb2.dump();

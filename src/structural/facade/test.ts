class CPU {
  start() {
    console.log("CPU started");
  }
}

class Memory {
  load() {
    console.log("Memory loaded");
  }
}

class ComputerFacade {
  private cpu = new CPU();
  private memory = new Memory();

  start() {
    this.cpu.start();
    this.memory.load();
    console.log("Computer started");
  }
}

export {};

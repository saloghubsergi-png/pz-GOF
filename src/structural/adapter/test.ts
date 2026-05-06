class OldSystem {
  oldRequest() {
    return "Old system data";
  }
}

class Adapter {
  constructor(private oldSystem: OldSystem) {}

  request() {
    return this.oldSystem.oldRequest();
  }
}

export {};

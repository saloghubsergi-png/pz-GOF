interface Transport {
  deliver(): void;
}

class Truck implements Transport {
  deliver() {
    console.log("Delivery by truck");
  }
}

class Ship implements Transport {
  deliver() {
    console.log("Delivery by ship");
  }
}

class TransportFactory {
  static create(type: string): Transport {
    if (type === "truck") return new Truck();
    if (type === "ship") return new Ship();
    throw new Error("Unknown type");
  }
}

export {};

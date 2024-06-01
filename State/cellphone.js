class Cellphone {
    constructor(state, ui, volume) {
        this.state = state;
        this.ui = ui;
        this.volume = volume;
    }

    changeState(state) {
        this.state = state;
    }

    pushPower() {
        this.state.pushPower();
    }

    pushHome() {
        this.state.pushHome();
    }

    turnOffScreen() {
        console.log("Screen turned off.");
    }

    turnOnScreen() {
        console.log("Screen turned on.");
    }

    unlockScreen() {
        console.log("Screen unlocked.");
    }
}

class State {
    constructor(cellphone) {
        this.cellphone = cellphone;
    }

    pushPower() {}

    pushHome() {}
}

class LockedState extends State {
    pushHome() {
        console.log("Setting ReadyStage");
        this.cellphone.changeState(new ReadyState(this.cellphone));
        cellphone.turnOnScreen();
    }

    turnOffScreen() {
        // Locked, so do nothing.
    }

    unlockScreen() {
        // Locked, so do nothing.
    }
}

class ReadyState extends State {
    pushPower() {
        console.log("Setting offStage");
        this.cellphone.changeState(new OffState(this.cellphone));
        cellphone.turnOffScreen();
    }

    pushHome() {
        console.log("Estás en Ready.");
    }
}

class OffState extends State {
    pushPower() {
        this.cellphone.changeState(new LockedState(this.cellphone));
    }

    pushHome() {
        this.cellphone.changeState(new LockedState(this.cellphone));
    }
}

// Instantiate the Cellphone with an initial state
const cellphone = new Cellphone(new LockedState(null), "defaultUI", 5);
cellphone.state.cellphone = cellphone; // Set the cellphone reference in the initial state
console.log(cellphone);

// Test the state transitions
cellphone.pushHome(); // Should transition to ReadyState
console.log(cellphone);

cellphone.pushPower();
console.log(cellphone);
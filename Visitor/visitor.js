class Client {
    constructor(name, birthDate, address){
        this.name = name,
        this.birthDate = birthDate,
        this.address = address
    }

    accept(visitor){
        visitor = new VisitorClient()
    }
}

class RegularClient extends Client {
    accept(visitor){
        visitor.visitRegularClient(this)
    }
}

class PremiumClient extends Client {
    accept(visitor){
        visitor.visitPremiumClient(this)
    }
}

class CorporationClient extends Client {
    accept(visitor){
        visitor.visitCorporationClient(this)
    }
}


class VisitorClient{
    visitRegularClient(client){
        client = new RegularClient;
    }

    visitPremiumClient(client){
        client = new PremiumClient;
    }

    visitCorporationClient(client){
        client = new CorporationClient;
    }
}

class SendVisitorMessage extends VisitorClient{
    visitRegularClient(client){
        console.log(`Sending Regular message to: ${client.name}`);
    }

    visitPremiumClient(client){
        console.log(`Sending Premium message to: ${client.name}`);
    }

    visitCorporationClient(client){
        console.log(`Sending Corp message to: ${client.name}`);
    }
}

function main() {
    const clients = [
        new RegularClient('Alice', '1990-01-01', '123 Main St'),
        new RegularClient('Bob', '1991-02-02', '456 Elm St'),
        new PremiumClient('Charlie', '1985-03-03', '789 Oak St'),
        new PremiumClient('Dave', '1986-04-04', '101 Pine St'),
        new CorporationClient('ACME Corp', '2000-05-05', '1 Corporate Plaza'),
        new CorporationClient('Globex Inc', '2001-06-06', '2 Business Blvd')
    ];

    const messageVisitor = new SendVisitorMessage();

    clients.forEach(client => client.accept(messageVisitor));
}

main();
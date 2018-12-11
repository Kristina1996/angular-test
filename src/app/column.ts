export class Column { constructor(
        public name: string,
        public title: string,
        public type: string
    ) {}
}

enum Type {
    string,
    button
}

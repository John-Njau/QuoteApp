export class Quote {
    // id!: number;
    // author!: string;
    // text!: string;
    showDetails: boolean;

    constructor(
        public author: string,
        public text: string,
        public uploadedBy: string,

    ) {
        this.showDetails = false;
    }
}


export class User{
    userName:string;
    password:string;
    positive:string;
    negative:string;
    constructor( userName:string,
        password:string,
        positive:string,
        negative:string){
            this.negative=negative;
            this.password=password;
            this.userName=userName;
            this.positive=positive;

    }

}
import { User } from './User';

export class Post{
    positive:string;
    negative:string;
    data:string;
    postId:string;

    constructor( positive:string,
        negative:string,
        data:string,
        postId:string){
            this.positive=positive;
            this.negative=negative;
            this.data=data;
            this.postId=postId;
          
        }

}
export default class CommentServer{
    url="https://jsonplaceholder.typicode.com/comments";

    async comments(){
        return await fetch(this.url).then(value=>value.json());
    }
};
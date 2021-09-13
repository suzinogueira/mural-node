module.exports = {

    posts: [
        {id: "00001",
        title: "Teste do Mural",
        description: "Descrição Teste"},
    ],//mantendo esse array fixo apenas para teste

    getAll(){
        return this.posts;

    },

    newPost(title, description){
        this.posts.push({id: generationID(), title, description});
    }

}

function generationID(){
    return Math.random().toString(36).substr(2,9);
}
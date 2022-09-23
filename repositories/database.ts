import { INote } from "../helpers/types";
class Note {
    private state: INote[];
    constructor(){
        this.state = [
            {
                id: 1,
                name: "The theory of evolute",
                content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
                created: 1663957778592,
                category: "Idea",
                isArchive: true
            },
            {
                id: 2,
                name: "William Gaddis",
                content: "Power doesn't gonna have a dentist appointment on the 3/5/2021,\t3/5/2021",
                created: 1663957778593,
                category: "Task",
                isArchive: false
            },
            {
                id: 3,
                name: "Books",
                content: "The Learn Startup",
                created: 1663957778594,
                category: "Idea",
                isArchive: true
            },
            {
                id: 4,
                name: "Shopping List",
                content: "Tomatoes,bread",
                created: 1663957778595,
                category: "Task",
                isArchive: false
            },
            {
                id: 5,
                name: "New Feature",
                content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
                created: 1663957778596,
                category: "Random Thought",
                isArchive: false
            },
            {
                id: 6,
                name: "Sixth note",
                content: "Content notes 6",
                created: 1663957778597,
                category: "Idea",
                isArchive: true
            },
            {
                id: 7,
                name: "Seventh note",
                content: "Content notes 7",
                created: 1663957778598,
                category: "Random Thought",
                isArchive: false
            }
        ];
    }
    findOne(id:number){
        return this.state.filter(item=>item.id === id)
    }
    findAll(){
        return this.state;
    }
    createItem(note:INote){
        const ID = this.state[this.state.length-1].id as number;
        this.state.push({
            id:ID+1,
            ...note
        });
        return this.state[this.state.length-1];
    }
    updateItem(note:INote){
        this.state = this.state.map(item=>{
            return item.id === note.id ? {
                ...item,
                ...note
            } : item
        });
        return this.state.filter(item=>item.id === note.id)
    }
    deleteItem(id:number){
        const lastItem = this.state.filter(item=>item.id === id);
        this.state = this.state.filter(item=>item.id !== id);
        return lastItem
    }
}

export default new Note();
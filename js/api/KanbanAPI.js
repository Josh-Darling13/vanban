// Static methods to interact with local storage

export default class KanbanAPI {
    static getItems(columnId){

        const column = read().find(column => column.id == columnId);
        if(!column){
            return [];
        }
        return column.items;  
    }
 
    static insertItems(columnId, content){
        const data = read();
        const column = data.find(column => column.id == columnId);
        const item = {
            id: Math.floor(Math.random() * 10000),
            content
        };

        if (!column){
            throw new Error("non exsistent column.");
        }

        column.items.push(item);
        save(data);

        return item;
    }
}

function read () {

    // creates a read function with ether empty valuse if this si the users first visit
    // or parses values if return visit
    const json = localStorage.getItem("kanban-data");
    if(!json){
        return[
            {
                id: 1,
                items:[]
            },
            {
                id: 2,
                items:[]
            },
            {
                id: 3,
                items:[]
            },           
        ]
    }

    return JSON.parse(json);
}

function save (data){
    localStorage.setItem("Kanban-data", JSON.stringify(data));
}
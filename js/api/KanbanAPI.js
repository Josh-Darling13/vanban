// Static methods to interact with local storage

export default class KanbanAPI {

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
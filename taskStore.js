class TaskStore{
    constructor(){
        this.tasks = [];
        this.nextId = 1;
    }

    add(title, priority, ownerId){
        if(!title || title.trim() === ""){
            throw new Error("The title is required");
        }
        if(!priority || priority < 1 || priority>3){
            throw new Error("The priority must be a number from 1 to 3");
        }

        const newTask = {
            id: this.nextId++,
            title: title.trim(),
            status: "todo",
            priority: priority,
            ownerId :ownerId
        };

        this.tasks.push(newTask);
        return newTask;

    }

    findById(id){
        return this.tasks.find(task => task.id == id);
    }

    remove(id){
        const index = this.tasks.findIndex(task => task.id == id);
        if(index === -1){
            return false;
        }
        this.tasks.splice(index, 1);
        return true;
    }

    update(id, changes){
        const task = this.findById(id);
        if(!task){
            return undefined;
        }

        if(changes.id !== undefined){
            delete changes.id;
        }

        Object.assign(task, changes);
        return task;
    }

    list(filter = {}){
        let result = [...this.tasks];

        if(filter.status){
            result= result.filter(task => task.status === filter.status);
        }

        if(filter.ownerId){
            result = result.filter(task => task.ownerId === filter.ownerId);
        }
        
        result.sort((a,b) => b.priority - a.priority);

        return result;
    }

    countByStatus(){
        const counts = { todo: 0, doing: 0, done: 0};

        this.tasks.forEach(task => {
            if(counts[task.status] !== undefined){
                counts[task.status]++;
            }
        });
        return counts;
    }
}

function runDemo() {
    console.log("Start of TaskStore");
    const store = new TaskStore();

    store.add("backend task", 1, 1);
    store.add("wash the dishes", 3, 2);
    store.add("go to the gym", 2, 3);
    
    const taskToUpdateb = store.add("buy tea", 2 , 2);

    console.log("tasks after adding:", store.list());

    store.update(taskToUpdateb.id, { status: "doing", priority: 3 });
    console.log("Task after update:", store.findById(taskToUpdateb.id));

    const isRemoved = store.remove(1);
    console.log("Task 1 removed?:", isRemoved);
    console.log("Tasks after removing task 1:", store.list());

    console.log("Filtered tasks (ownerId: 2):", store.list({ ownerId: 2 }));
    console.log("Status counts:", store.countByStatus());
}

runDemo();
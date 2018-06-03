import Dexie from 'dexie';

export default class DishCounter {

    static db;

    static openDb()
    {
        this.db = new Dexie('CalCounter');

        // Declare tables, IDs and indexes
        this
            .db
            .version(1)
            .stores({currentSessionDishCounter: 'id'});

    }

    static updateRecord(record)
    {

        this
            .db
            .currentSessionDishCounter
            .put({id: record.id, itemToAdd: record.itemToAdd, quantityToAdd: record.quantityToAdd})
            .then(res => {
       
            });

    }

    static deleteAll()
    {
        this.openDb();
        return this.db.currentSessionDishCounter.clear();
    }

    static async loadAll()
    {
        this.openDb();
        return await this.db.currentSessionDishCounter.toArray();
    }
}

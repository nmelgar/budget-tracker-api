// External dependencies
import { ObjectId } from "mongodb";

// Class Implementation
export default class Budget {
    constructor(public description: string, public cost: number, public category: string, public id?: ObjectId) {}
}
import { Client, Databases, ID, Storage } from "appwrite";
import conf from "../conf/Conf";


export class DatabaseService {
  client = new Client()
  database
  storage
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    this.database = new Databases(this.client)
    this.storage = new Storage(this.client)
  }

  async submitFormData({ name, phone, email, message }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        { name, phone, email, message }
      )
    } catch (error) {
      console.log(error.message)
    }

  }
}

const dbService = new DatabaseService()
export default dbService
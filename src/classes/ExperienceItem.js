import { v4 as uuidv4 } from "uuid";

export default class ExperienceItem {
  constructor() {
    this.company = "";
    this.position = "";
    this.location = "";
    this.startDate = "";
    this.endDate = "";
    this.description = "";
    this.uid = uuidv4();
  }
}

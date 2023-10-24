import { v4 as uuidv4 } from "uuid";

export default class EducationItem {
  constructor() {
    this.school = "";
    this.degree = "";
    this.location = "";
    this.startDate = "";
    this.endDate = "";
    this.uid = uuidv4();
  }
}

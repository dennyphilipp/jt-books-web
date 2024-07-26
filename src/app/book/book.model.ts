export class Book {
    id: number;
    title: string;
    publischer: string;
    version: number;
    year: string;
  
    constructor(title: string, publischer: string, version: number, year: string, id: number) {
      this.title = title;
      this.publischer = publischer;
      this.version = version;
      this.year = year;
      this.id = id;
    }
  }
  
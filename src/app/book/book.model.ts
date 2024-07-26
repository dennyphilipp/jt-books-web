export class Book {
    id: number;
    title: string;
    publischer: string;
    version: number;
    year: string;
    authors: any[];
    subjects: any[];

  
    constructor(title: string, publischer: string, version: number, year: string, id: number, authors: any[], subjects: any[]) {
      this.title = title;
      this.publischer = publischer;
      this.version = version;
      this.year = year;
      this.id = id;
      this.authors = authors;
      this.subjects = subjects;
    }
  }
  
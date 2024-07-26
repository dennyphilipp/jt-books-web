export class Payment {
    id: number;
    typeId: number;
    bookId: number;
    value: number;
  
    constructor(id: number, typeId: number, bookId: number, value: number) {
      this.id = id;
      this.typeId = typeId;
      this.bookId = bookId;
      this.value = value;
    }
  }
  
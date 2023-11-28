import { Injectable } from "@nestjs/common";
import { Cat } from "src/dto/cat.dto";

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: string): Cat {
    return this.cats.find(cat => cat.id === id);
  }

  create(cat: Cat): Cat {
    let alreadyExists = Boolean(this.findOne(cat.id));
    if (alreadyExists) {
      throw new Error('Cat already exists on the database!');
    }
    this.cats.push(cat);
    return cat;
  }

  update(id: string, updatedCat: Cat): Cat {
    this.delete(id);
    this.cats.push(updatedCat);
    return updatedCat;
  }

  delete(id: string): void {
    this.cats.splice(+id, 1);
  }
}
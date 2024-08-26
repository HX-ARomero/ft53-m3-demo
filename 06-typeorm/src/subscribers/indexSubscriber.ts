import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm";
import { Platform } from "../entities/PlatformEntity";

@EventSubscriber()
export class PlatformSubscriber
implements EntitySubscriberInterface<Platform> {
  listenTo() {
    return Platform;
  }

  beforeInsert(event: InsertEvent<Platform>) {
    //* Convertir todo a minúscula:
    if(event.entity.name) {
      event.entity.name = event.entity.name.toLowerCase().trim();
    }
    console.log("Before Insert: ", event.entity);
  }

  afterInsert(event: InsertEvent<Platform>) {
    console.log("After Insert: ", event.entity);
  }
}
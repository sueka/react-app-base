import TaskId from '~/domain/vo/TaskId'
import yieldThis from '~/lib/extensions/Unknown/yieldThis'
import { asBoolean, asObject, asString, optional } from '~/lib/validators/commonValidators'
import Entity from './Entity'

const asIdSerializedTask = asObject('an Id-serialized Task', (input) => ({
  id: asString(input.id),
  content: optional(asString)(input.content),
  done: optional(asBoolean)(input.done),
}))

interface TaskRequest {
  id?: TaskId
  content?: string
  done?: boolean
}

export default class Task extends Entity {
  private _content: string
  private _done: boolean

  constructor({
    id,
    content = '',
    done = false,
  }: TaskRequest) {
    super(id)

    this._content = content
    this._done = done
  }

  public static deserialize(serialized: string): Task {
    const deserialized = yieldThis(asIdSerializedTask(JSON.parse(serialized)), (({ id, content, done }) => ({
      id: TaskId.deserialize(id),
      content,
      done,
    })))

    return new Task(deserialized)
  }

  public serialize(): string {
    return JSON.stringify({
      id: this.id.serialize(),
      content: this.content,
      done: this.done,
    })
  }

  public hashCode() {
    // tslint:disable-next-line:no-let
    let result = 17

    result = 31 * result + this.id.hashCode()
    result = 31 * result + this.content.hashCode()
    result = 31 * result + this.done.hashCode()

    return result
  }

  public with({
    id = this.id,
    content = this.content,
    done = this.done,
  }: TaskRequest): Task {
    return new Task({ id, content, done })
  }

  get content() {
    return this._content
  }

  // TODO: immutable
  set content(value) {
    this._content = value // tslint:disable-line:no-object-mutation
  }

  get done() {
    return this._done
  }

  // TODO: immutable
  set done(value) {
    this._done = value // tslint:disable-line:no-object-mutation
  }
}

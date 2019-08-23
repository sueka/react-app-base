import assert from 'assert'

import hashCodeForBoolean from 'src/lib/extensions/Boolean/hashCode'
import hashCodeForString from 'src/lib/extensions/String/hashCode'
import TaskId from 'src/domain/vo/TaskId'
import Entity from './Entity'

export interface TaskRequest {
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
    const { id: serializedId, content, done } = JSON.parse(serialized)

    // TODO: shape & type check

    return new Task({ id: TaskId.deserialize(serializedId), content, done })
  }

  public serialize(): string {
    return JSON.stringify({
      id: this.id.serialize(),
      content: this.content,
      done: this.done,
    })
  }

  public get hashCode() {
    // tslint:disable-next-line:no-let
    let result = 17

    result = 31 * result + this.id.hashCode
    result = 31 * result + hashCodeForString(this.content)
    result = 31 * result + hashCodeForBoolean(this.done)

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
    assert(value.length <= 140)

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
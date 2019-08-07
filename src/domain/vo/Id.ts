import ValueObject from './ValueObject'

export default class Id extends ValueObject<string> {
  protected checkInvariant() {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(this.value)
  }

  get hashCode() {
    return this.value
  }
}

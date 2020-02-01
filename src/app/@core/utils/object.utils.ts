export class ObjectUtils {
  static isEmpty(input: any) {
    return input === undefined || input === null;
  }

  public static setUndefinedIfNull(input: any): any {
    return this.isEmpty(input) ? undefined : input;
  }
}

export class ObjectUtils {
  static isEmpty(input: any) {
    return input === undefined || input === null;
  }

  public static setUndefinedIfNull(input: any): any {
    return this.isEmpty(input) ? undefined : input;
  }

  public static setUndefinedOrElseId(input: any): any {
    return this.isEmpty(input) ? undefined : input._id;
  }

  /**
   *
   * @param obj A model object containing property and its value.
   * @returns A model object with non-empty property and its value.
   */
  public static removePropIfEmpty(obj: any) {
    Object.keys(obj).forEach(v => {
      if (ObjectUtils.isEmpty(obj[v])) {
        delete obj[v];
      }
    });

    return obj;
  }
}

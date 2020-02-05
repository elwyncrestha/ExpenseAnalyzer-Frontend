export class ObjectUtils {
  /**
   * @param input Any input.
   * @returns Checks whether given input is `undefined` or `null`.
   */
  static isEmpty(input: any) {
    return input === undefined || input === null;
  }

  /**
   * @param input Any input.
   * @returns `undefined` if `input` is empty.
   */
  public static setUndefinedIfNull(input: any): any {
    return this.isEmpty(input) ? undefined : input;
  }

  /**
   * @param input An object with property `_id`.
   * @returns `undefined` if `input` is empty otherwise `_id` of `input`
   */
  public static setUndefinedOrElseId(input: any): any {
    return this.isEmpty(input) ? undefined : input._id;
  }

  /**
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

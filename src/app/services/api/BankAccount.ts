export interface BankAccountInterface{
  id: number;
  name: string;
  type: string;
  ammount: number;
}
export class BankAccount {
  private id: number;
  private name: string;
  private type: string;
  private ammount: number;

  constructor(data:BankAccountInterface = null){
    if(data){
      this.id = data.id;
      this.name = data.name;
      this.type = data.type;
      this.ammount = data.ammount;
    }
  }
  /**
   * GetterId
   * @return {number}
   */
  public getId(): number {
    return this.id;
  }

  /**
   * GetterName
   * @return {string}
   */
  public getName(): string {
    return this.name;
  }

  /**
   * GetterType
   * @return {string}
   */
  public getType(): string {
    return this.type;
  }

  /**
   * GetterAmmount
   * @return {number}
   */
  public getAmmount(): number {
    return this.ammount;
  }

  /**
   * SetterId
   * @param {number} value
   */
  public setId(value: number) {
    this.id = value;
  }

  /**
   * SetterName
   * @param {string} value
   */
  public setName(value: string) {
    this.name = value;
  }

  /**
   * SetterType
   * @param {string} value
   */
  public setType(value: string) {
    this.type = value;
  }

  /**
   * SetterAmmount
   * @param {number} value
   */
  public setAmmount(value: number) {
    this.ammount = value;
  }

}

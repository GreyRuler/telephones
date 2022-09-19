export default class Validator {
  static validateTelephoneNumber(telephoneNumber) {
    return telephoneNumber
      .replace(/^8\s/, '+7')
      .replace(/[()]|-|\s/g, '');
  }
}

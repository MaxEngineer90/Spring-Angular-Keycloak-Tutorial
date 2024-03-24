export type ConfigurationFeatures = {
  mockHolidays: boolean;
  mockCustomers: boolean;
  pagedCustomers: boolean;
};

export class Configuration {
  #baseUrl: string;

  constructor(baseUrl: string) {
    this.#baseUrl = baseUrl;
  }

  get baseUrl() {
    return this.#baseUrl;
  }
}

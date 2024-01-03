import { TypesOfGuitar, ConditionGuitar, ElectronicsGuitar, PickupsElectronicsGuitar } from ".";

export interface SpecsOfGuitar {
  codeOfItem: number;
  picture: string;
  type: TypesOfGuitar;
  manufacturer: string;
  condition: ConditionGuitar;
  countryOfManufacture: string;
  bodyShape: string;
  orientation: string;
  numberOfStrings: 4 | 6 | 7 | 8 | 9 | 12;
  numberOfFrets: 22 | 24 | number;
  beaker: 24.75 | 25.5 | 27 | 30 | 34 | number;
  deck: string;
  neck: string;
  fingerboard: string;
  caseColor: string;
  electronics: ElectronicsGuitar;
  pickups: PickupsElectronicsGuitar;
  bridge: string;
  neckMounting: string;
  article: string;
  weight: number;
}

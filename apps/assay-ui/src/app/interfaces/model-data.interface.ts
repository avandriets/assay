export interface ModelData {
  title: string;
  targetName: string;
  organismName: string;
  numActives: number | null;
  numCompounds: number | null;
  ROC: number | null;
  F1: number | null;
  kappa: number | null;
  MCC: number | null;
  domainCompat: number | null;
  numInvalid: number | null;
}

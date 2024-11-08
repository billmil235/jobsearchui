export interface Application {
  applicationId: string | undefined;
  searchId: string;
  applicationDate: Date;
  companyName: string;
  companyWebSite: string;
  applicationTypeId: number;
  applicationSourceTypeId: number;
}

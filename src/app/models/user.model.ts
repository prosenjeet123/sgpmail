export interface User{
    data?: [profileData] | any;
    limit?: number;
    page?: number;
    total?: number;
  }


  export interface profileData{
    id?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    picture?: string;
  }
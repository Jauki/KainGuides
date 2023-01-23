import { DepartmentEnum } from "../../common/departments"

export interface GuideType {
    isActive : boolean,
    firstname : string,
    lastname: string,
    time? : string | null,
    dept : DepartmentEnum,
    tours? : number
};


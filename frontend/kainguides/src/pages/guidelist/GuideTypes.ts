import { DepartmentEnum } from "../../common/departments"

export interface GuideType {
    isActive? : boolean,
    id? : number,
    first_name : string,
    last_name : string,
    time? : string | null,
    dept : DepartmentEnum,
    tours? : number,
    school_class : string
};


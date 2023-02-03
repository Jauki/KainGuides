import { DepartmentEnum } from "../../common/departments"

export interface GuideType {
    isActive? : boolean,
    id? : number,
    first_name : string,
    last_name : string,
    time? : string | null,
    department : DepartmentEnum,
    tours? : number,
    school_class : string
};

export interface TourType{
    id : number,
    visitors : number,
    potential_students : number,
    start_time : string,
    end_time : string | null,
    guide : number, // PK of the guide
    department : DepartmentEnum
}

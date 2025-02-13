export interface IFilterBtnProps {
    title: string
    data?: Array<IFilterData>
    sortedD?: Array<IFilterData>
    updateData?(newData:Array<IFilterData> ): void
}

export interface IFilterItemActiveProp {
    filterItemActive: boolean
}

export interface IFilterData {
    id: number
    [propName: string]: any;
}

export interface IFilterAnimateProp {
    animate: boolean
}
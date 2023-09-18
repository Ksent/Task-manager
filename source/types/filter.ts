export interface IFiltersState {
  filters: IFilter[],
  iconFilters: IIconFilters,
}

export interface IFilter {
  id: number,
  forName: string,
  value: string,
  subtitle?: string,
}

export interface IIconFilters {
  className: string, 
  width:string, 
  height:string, 
  stroke:string,
}
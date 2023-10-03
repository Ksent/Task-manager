type IconFilters = {
  className: string;
  width:string;
  height:string;
  stroke:string;
}

export interface IFilter {
  id: number;
  forName: string;
  value: string;
  subtitle: string;
  initialValue?: string;
}

export type FiltersState = {
  filters: IFilter[];
  iconFilters: IconFilters;
}


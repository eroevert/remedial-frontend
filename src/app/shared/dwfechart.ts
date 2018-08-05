export interface CharItem {
  label: string;
  data: number[];
  // refdataGest: number[];
}

export interface Dwfechart {
  chartLabels: number[];
  reportingItemList: CharItem[];

}

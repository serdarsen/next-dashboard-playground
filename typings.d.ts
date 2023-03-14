export interface Order {
  id: number;
  name: Name;
  total: number;
  status: string;
  method: string;
  date: string;
}

export interface Name {
  first: string;
  last: string;
}

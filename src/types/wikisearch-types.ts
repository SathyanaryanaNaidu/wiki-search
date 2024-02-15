export interface Wiki {
  success: boolean;
  list?: ListEntity[] | null;
  errorMessage: string;
}
export interface ListEntity {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

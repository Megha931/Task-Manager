
export interface Tag {
	title: string;
	bg: string;
	text: string;
  }
  
  export interface TaskData {
	id: string;
	title: string;
	description: string;
	priority: string;
	deadline: number;
	image?: string; 
	alt?: string; 
	tags: Tag[];
  }
  
  export interface Columns {
	backlog: Column;
	pending: Column;
	todo: Column;
	doing: Column;
	done: Column;
  }
  
  export interface Column {
	name: string;
	items: TaskData[];
  }
  

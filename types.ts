
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

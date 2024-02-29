export interface IPicture {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export const initialPicture: IPicture[] = [
  {
    id: '',
    title: '',
    description: '',
    price: '',
    imageUrl: '',
  },
];

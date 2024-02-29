import { IPicture } from '../../../models';

export interface ICartDrawerProps {
  openDrawer: boolean;
  cartItems: IPicture[];
  onClose: (arg: boolean) => void;
}

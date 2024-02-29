import { getPictures } from '../../services';
import { IPicture } from '../../models';

export async function getCatalogPictures() {
  const pictures: IPicture[] = await getPictures();
  return pictures;
}

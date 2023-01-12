import { getRedirect } from '../../../lib/redirect';
import { solutions } from './[slug]';

export default getRedirect(`/solutions/${solutions[0].slug}`);
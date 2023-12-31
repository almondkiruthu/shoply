import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    'skb9ugCWwpWrO4RwNQcaoDKp7qzpEhG03MpmsM1JCdDOaCfAJMsREceYKRH89hUDd1B0O4Ucmwp1RVQ9d2IT9gCxGhokXfpmxwv13C0zaIGObLPrZDDesL6n8lrKFz17fXFg5R4KSyzWroZACZbR29cvtcEu55vjFDOxknSHO5hX4KkS6SjE',
});

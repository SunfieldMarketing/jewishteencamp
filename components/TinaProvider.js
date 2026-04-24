'use client';
import { TinaProvider as Provider } from 'tinacms/dist/edit-state';
import client from '../tina/__generated__/client';

export default function TinaProvider({ children }) {
  return <Provider client={client}>{children}</Provider>;
}

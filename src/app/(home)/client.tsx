'use client';

import { trpc } from '@/trpc/client';

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: 'Jane doe',
  });

  return (
    <div>
      <p>Client - {data.greeting}</p>
    </div>
  );
};

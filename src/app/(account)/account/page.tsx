import { PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { getSession } from '@/features/account/controllers/get-session';
import { getSubscription } from '@/features/account/controllers/get-subscription';
import { PricingCard } from '@/features/pricing/components/price-card';
import { getProducts } from '@/features/pricing/controllers/get-products';
import { Price, ProductWithPrices } from '@/features/pricing/types';

export default async function AccountPage() {
  const [session, subscription, products] = await Promise.all([getSession(), getSubscription(), getProducts()]);

  if (!session) {
    redirect('/login');
  }

  let userProduct: ProductWithPrices | undefined;
  let userPrice: Price | undefined;

  if (subscription) {
    for (const product of products) {
      for (const price of product.prices) {
        if (price.id === subscription.price_id) {
          userProduct = product;
          userPrice = price;
        }
      }
    }
  }

  return (
    <section className='container mx-auto px-4 py-16'>
      <h1 className='mb-8 text-center text-4xl font-bold tracking-tight'>Account Settings</h1>

      <div className='flex flex-col gap-6'>
        <Card
          title='Your Plan'
          footer={
            subscription ? (
              <Button size='sm' variant='secondary' asChild>
                <Link href='/manage-subscription'>Manage your subscription</Link>
              </Button>
            ) : (
              <Button size='sm' variant='default' asChild>
                <Link href='/pricing'>Start a subscription</Link>
              </Button>
            )
          }
        >
          {userProduct && userPrice ? (
            <PricingCard product={userProduct} price={userPrice} />
          ) : (
            <p className='text-muted-foreground'>You don&apos;t have an active subscription</p>
          )}
        </Card>
      </div>
    </section>
  );
}

function Card({
  title,
  footer,
  children,
}: PropsWithChildren<{
  title: string;
  footer?: ReactNode;
}>) {
  return (
    <div className='m-auto w-full max-w-3xl rounded-lg border bg-card text-card-foreground shadow-sm'>
      <div className='p-6'>
        <h2 className='mb-4 text-2xl font-semibold tracking-tight'>{title}</h2>
        <div className='py-2'>{children}</div>
      </div>
      {footer && (
        <div className='flex justify-end rounded-b-lg border-t bg-muted/50 px-6 py-4'>
          {footer}
        </div>
      )}
    </div>
  );
}

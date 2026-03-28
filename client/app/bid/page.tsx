import { Suspense } from "react";
import BidClient from "./BidClient";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ auctionPk?: string }>;
}) {
  const { auctionPk } = await searchParams;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BidClient auctionPk={auctionPk ?? null} />
    </Suspense>
  );
}
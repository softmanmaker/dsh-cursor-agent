import { afterEach, expect, test } from '@rstest/core';
import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { UsageCard } from '../../src/client/UsageCard';

afterEach(cleanup);

const usage = (overrides: Record<string, unknown> = {}) => ({
  fetchedAt: Date.now(),
  email: 'user@example.com',
  planName: 'Ultra',
  displayMessage: "You've hit your usage limit",
  plan: {
    totalLimit: 3500,
    totalSpend: 3170.58,
    remaining: 329.42,
    autoPercentUsed: 91.2,
    apiPercentUsed: 86.7,
    limit: 400,
    includedSpend: 400,
    bonusLimit: 3100,
    bonusSpend: 2770.58,
  },
  billingCycle: { daysLeft: 3 },
  ...overrides,
});

const renderCard = (value: Record<string, unknown>) =>
  render(
    <UsageCard
      rpc={{ call: async () => ({ ok: true, value }) }}
      t={(key) => key}
      signedIn
      resetKey={0}
    />,
  );

test('usage card hides the stale limit banner and shows the two model pools', async () => {
  renderCard(usage());
  await waitFor(() => expect(screen.getByText(/modelPools/)).toBeTruthy());

  expect(screen.getByText(/autoSpend/)).toBeTruthy();
  expect(screen.getByText(/apiSpend/)).toBeTruthy();
  expect(screen.getByText(/planTotalLimit/)).toBeTruthy();
  expect(screen.queryByText("You've hit your usage limit")).toBeNull();
  expect(screen.queryByText(/planIncluded/)).toBeNull();
  expect(screen.queryByText(/planBonus/)).toBeNull();
});

test('usage card keeps the limit banner when the whole plan is exhausted', async () => {
  renderCard(
    usage({
      plan: {
        totalLimit: 3500,
        totalSpend: 3500,
        remaining: 0,
        totalPercentUsed: 100,
        autoPercentUsed: 100,
        apiPercentUsed: 100,
      },
    }),
  );
  await waitFor(() => expect(screen.getByText("You've hit your usage limit")).toBeTruthy());
});

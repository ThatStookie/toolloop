# ToolLoop judge walkthrough

[Live website](https://toolloop-axis.vercel.app/) · [Back to README](../README.md)

ToolLoop is a MagdeHack 2026 prototype for finding community tools and turning DIY ideas into practical projects. All people, listings, availability, and credits are simulated.

## Two-minute tour of the published website

The following path matches the Vercel deployment inspected on **14 November 2026**. It does not require an account.

| Time | Action | What to show |
| --- | --- | --- |
| 0:00–0:20 | Open the [homepage](https://toolloop-axis.vercel.app/) | “Make more. Own less.”: access to occasional-use tools without buying them |
| 0:20–0:45 | Open [Explore](https://toolloop-axis.vercel.app/explore), search for `drill`, or choose a category | Working discovery controls over 12 sample listings |
| 0:45–1:10 | Open [DIY projects](https://toolloop-axis.vercel.app/projects) and expand the wooden shelf’s steps | Written instructions and links to the equipment needed |
| 1:10–1:35 | Select the drill, choose a duration, and preview a borrow request | A local confirmation that explicitly says no request was saved or sent |
| 1:35–2:00 | Open the [demo profile](https://toolloop-axis.vercel.app/profile) | Sample tools and activity, plus the proposed credit-sharing concept |

On this published version, the drill belongs to the sample owner Lena Weber and costs 80 credits per day. The profile shows a static 240-credit sample balance. Those values do not represent the newer local Alex/Sam scenario.

## Local Alex/Sam credits extension

This extension exists in the inspected **local checkout**. It was not visible on the published Vercel website at the time of inspection. Its files include `lib/borrowing-demo.ts` and `components/demo-store.ts`; it should not be presented as a deployed feature until a later deployment actually includes it.

Start the local app using the [README instructions](../README.md#run-locally), then:

1. Click **Reset Demo**. Alex starts with **100 credits**; Sam starts with **50**.
2. Click **Build a shelf**, then **Borrow Sam’s drill · 20 credits**.
3. As Alex, click **Request to borrow · 20 credits**. Balances remain **100 / 50**.
4. Click **Switch to Sam to approve**, or select Sam in the toolbar.
5. Click **Approve Alex’s request**. Balances still remain **100 / 50**.
6. Click **Confirm completion · Earn 30 credits**. Alex now has **80 credits**; Sam now has **80**.
7. Open either demo profile or reload the page to show browser-local persistence. **Reset Demo** restores the initial state.

### What the numbers mean

Sam lends free of charge (€0). Alex’s 20-credit borrowing cost is separate from Sam’s 30-credit reward from a simulated community pool. Sam does not receive an additional 20 credits from Alex. These example amounts demonstrate the idea; they are not a finalized credit economy.

Only completion changes the balances. Only Alex may request, and only Sam may approve or complete. The demo allows one loan per reset, with balances derived from its completion status so repeated actions cannot award the reward twice or reduce Alex’s balance below zero.

The selected user and loan status are saved under `toolloop-borrowing-demo-v1` in localStorage. This is confined to the browser and origin; it is not a shared database, a secure account system, or a production ledger. Browser data can be cleared or edited. If localStorage is unavailable, the UI reports that actions could not be saved.

Other listings retain their original in-memory request preview; they do not run this completion/reward flow.

## Scope at a glance

- **Working frontend:** navigation, search, filters, sorting, tool details, project steps, and tool-to-project links.
- **Simulated:** owners, inventory, availability, costs, balances, request previews, and the local credits extension.
- **Not implemented:** authentication, real booking records, payments, owner messaging, a server-side ledger, or verified YouTube tutorials.

## Local checks

The current local checkout defines:

```bash
npm run test:demo
npm run lint
npm run build
```

The borrowing tests cover the completion-only balance update, repeated actions, user-role restrictions, reset, and invalid stored data. This documentation update does not change or redeploy the application.

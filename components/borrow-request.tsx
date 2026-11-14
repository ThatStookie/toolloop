'use client';

import { useState } from 'react';
import type { Tool } from '@/lib/types';
import { Icon } from './icon';
export function BorrowRequest({
  tool
}: {
  tool: Tool;
}) {
  const [confirmed, setConfirmed] = useState(false);
  const [days, setDays] = useState('1');
  const [method, setMethod] = useState('credits');
  return <div className="borrow-panel">
    <span className={`availability inline ${tool.available ? '' : 'unavailable'}`}>
      <span />
      {tool.available ? 'Available in this demo' : 'Currently on loan'}
    </span>
    <h2>Make it yours for a day.</h2>
    <div className="detail-price">
      <strong>€{tool.price}</strong>
      <span>/ day</span>
      <span>or {tool.points} credits / day</span>
    </div>
    <p className="muted">Pickup in Magdeburg · Exact location would be arranged with the owner.</p>
    <form onSubmit={e => {
      e.preventDefault();
      setConfirmed(true);
    }}>
      <fieldset disabled={!tool.available || confirmed}>
        <legend className="sr-only">Borrowing preferences</legend>
        <label className="field-label" htmlFor="days">Borrowing duration</label>
        <select id="days" value={days} onChange={e => setDays(e.target.value)}>{[1, 2, 3, 4, 5, 6, 7].map(n => <option key={n} value={n}>{n} {n === 1 ? 'day' : 'days'}</option>)}</select>
        <label className="field-label" htmlFor="payment-method">Preferred way to borrow</label>
        <select id="payment-method" value={method} onChange={e => setMethod(e.target.value)}>
          <option value="credits">Community credits</option>
          <option value="euros">Euros</option>
        </select>
      </fieldset>
      <div className="borrow-total">
        <span>Demo total</span>
        <strong>{method === 'credits' ? `${tool.points * Number(days)} credits` : `€${tool.price * Number(days)}`}</strong>
      </div>
      <button type="submit" className="button full" disabled={!tool.available || confirmed}>
        {confirmed ? 'Demo request previewed' : tool.available ? 'Request to borrow' : 'Unavailable right now'}
        <Icon name={confirmed ? 'check' : 'arrow'} size={18} />
      </button>
    </form>
    {confirmed && <div role="status" className="confirmation">
      <strong><Icon name="check" size={18} /> Your demo request is ready.</strong>
      <p>You selected {tool.name} for {days} {days === '1' ? 'day' : 'days'}. This is a local preview: no request was saved or sent to {tool.owner}, and no payment or credits were taken.</p>
      <button className="text-link" onClick={() => setConfirmed(false)}>Edit demo request</button>
    </div>}
    <p className="demo-caption">Prototype only. No real booking, payment, or credit transfer.</p>
  </div>;
}

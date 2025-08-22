import React from "react";

export default function App() {
  return (
    <div>
      <aside>
        <div>
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
            alt="Profile"
          />
          <h2>Your Name</h2>
          <p>UI UX Designer</p>
        </div>

        <nav>
          <ul>
            <li>Overview</li>
            <li>Transactions</li>
            <li>Cards</li>
            <li>Invoices</li>
            <li>Goals</li>
            <li>Settings</li>
          </ul>
        </nav>

        <button>Upgrade to premium</button>
      </aside>

      <main>
        <section>
          <h3>Cards</h3>
          <div>
            <p>cloudcash</p>
            <p>PREMIUM ACCOUNT</p>
            <p>5789 **** **** 2847</p>
            <p>Card Holder Mike Smith</p>
            <p>Expiry date 06/21</p>
          </div>

          <div>
            <p>$2850.75</p>
            <p>Income: $1500.50</p>
            <p>Outcome: $350.60</p>
            <p>Deactivate card</p>
          </div>

          <div>
            <p>Weekly payment limit</p>
            <p>$350.60 / $4000</p>
          </div>
        </section>

        <section>
          <h3>Goals</h3>
          <div>
            <p>$550</p>
            <p>12/20</p>
            <p>Holidays</p>
          </div>

          <ul>
            <li>Shopping — 52%</li>
            <li>Electronics — 21%</li>
            <li>Travels — 74% (Almost there!)</li>
          </ul>
        </section>

        <section>
          <h3>Transaction history</h3>
          <ul>
            <li>Tesco Market — Shopping — 13 Dec 2020 — $75.67</li>
            <li>ElectroMen Market — Shopping — 14 Dec 2020 — $250.00</li>
            <li>Fiorgio Restaurant — Food — 07 Dec 2020 — $19.50</li>
            <li>John Mathew Kayne — Sport — 06 Dec 2020 — $350</li>
            <li>Ann Marlin — Shopping — 31 Nov 2020 — $430</li>
          </ul>
        </section>

        <section>
          <h3>New transaction</h3>
          <ul>
            <li>Ann</li>
            <li>Monica</li>
            <li>John</li>
            <li>Mike</li>
            <li>Mia</li>
            <li>Add New</li>
          </ul>
          <button>Send the transfer</button>
        </section>
      </main>
    </div>
  );
}

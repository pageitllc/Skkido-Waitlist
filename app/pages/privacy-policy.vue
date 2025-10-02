<template>
  <div class="privacy-container">
    <h1>Privacy Policy</h1>
    <p><strong>Last updated: October 2025</strong></p>

    <h2>1. Introduction</h2>
    <p>
      Welcome to <strong>Skkido</strong>, a brand of <strong>Pageitio LLC</strong> ("Skkido," "we," "us").
      We respect your privacy and are committed to protecting your personal data.
      This Privacy Policy explains how we collect, use, disclose, store, and protect information when you
      visit <NuxtLink to="/">www.skkido.com</NuxtLink> or use the Skkido platform (together, the "Services").
    </p>

    <h2>2. Who we are</h2>
    <p>Skkido is operated by <strong>Pageitio LLC</strong>, a company registered in Wyoming, USA.</p>
    <p><strong>Contact:</strong> privacy@skkido.com</p>

    <h2>3. The data we collect</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Examples</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account Data</td>
            <td>Name, email, business profile, billing address, subscription plan</td>
            <td>You provide when signing up</td>
          </tr>
          <tr>
            <td>Workspace Content</td>
            <td>Projects, contracts, invoices, uploaded files</td>
            <td>You upload</td>
          </tr>
          <tr>
            <td>Payment Data</td>
            <td>Billing info, VAT number, payment method</td>
            <td>You provide; processed by Stripe</td>
          </tr>
          <tr>
            <td>Usage & Device Data</td>
            <td>IP, browser, timezone, feature usage</td>
            <td>Collected automatically</td>
          </tr>
          <tr>
            <td>Cookies & Tech</td>
            <td>Session cookies, analytics cookies</td>
            <td>Your device</td>
          </tr>
          <tr>
            <td>Marketing Data</td>
            <td>Newsletter opt-in, waitlist sign-up, surveys</td>
            <td>You provide</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p><strong>Data accuracy:</strong> Automated insights may be incomplete, biased, or erroneous. Validate before making business decisions.</p>
    <p><strong>Sensitive data:</strong> We do not intentionally collect sensitive data. If you upload such files, we act as a processor only.</p>

    <h2>4. Purposes & lawful bases</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Lawful Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Create & manage accounts</td>
            <td>Contract (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Provide workspace & payment features</td>
            <td>Contract (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Analytics & improvements</td>
            <td>Legitimate interests (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Security & fraud prevention</td>
            <td>Legitimate interests (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Marketing emails</td>
            <td>Consent (Art. 6(1)(a))</td>
          </tr>
          <tr>
            <td>Payments & invoices</td>
            <td>Contract; Legal obligation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>5. Sharing your data</h2>
    <p>We do not sell personal data. We may share with:</p>
    <ul>
      <li>Service providers (Google Cloud, Stripe, Brevo, Mixpanel)</li>
      <li>Professional advisers (lawyers, accountants, insurers)</li>
      <li>Regulators/law enforcement if required</li>
      <li>Buyers in case of merger/acquisition (with NDAs)</li>
    </ul>

    <h2>6. International transfers</h2>
    <p>Data may be processed in the USA and EU. Transfers use SCCs or adequacy decisions.</p>

    <h2>7. Data retention</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Data type</th>
            <th>Retention period</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Account & billing</td><td>Life of account + 6 years</td></tr>
          <tr><td>Workspace content</td><td>Until deleted or 12 months after closure</td></tr>
          <tr><td>Payment data</td><td>Life of account + 6 years</td></tr>
          <tr><td>Logs & usage</td><td>12 months (aggregated thereafter)</td></tr>
          <tr><td>Marketing opt-outs</td><td>Indefinitely</td></tr>
        </tbody>
      </table>
    </div>

    <h2>8. Security</h2>
    <ul>
      <li>OAuth + optional 2FA login</li>
      <li>AES-256 encryption in transit & at rest</li>
      <li>Role-based access controls</li>
      <li>Google Cloud hosting (ISO 27001 aligned)</li>
      <li>Pen tests, monitoring & backups</li>
    </ul>

    <h2>9. Cookies & consent</h2>
    <p>We use:</p>
    <ul>
      <li><strong>Strictly necessary cookies</strong> – login sessions (no consent needed)</li>
      <li><strong>Analytics cookies</strong> – Mixpanel, Google Analytics (consent needed)</li>
      <li><strong>Preference cookies</strong> – remember settings</li>
    </ul>

    <h2>10. Your rights</h2>
    <p>You can:</p>
    <ul>
      <li>Access your data</li>
      <li>Correct or delete it</li>
      <li>Restrict or object to processing</li>
      <li>Port your data</li>
      <li>Withdraw consent</li>
      <li>Complain to regulators (e.g. ICO, EU DPAs)</li>
    </ul>

    <h2>11. Automated decision-making</h2>
    <p>Skkido may use automated scoring. These do not have legal/significant effects. You can request human review.</p>

    <h2>12. Changes</h2>
    <p>We may update this policy. Material changes will be notified 30 days in advance.</p>

    <h2>13. Contact us</h2>
    <p>Email: privacy@skkido.com</p>
    <p>Postal: Pageitio LLC (Skkido), Wyoming, USA</p>

  </div>
</template>

<script setup>

</script>

<style scoped>
.privacy-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  background: #fff;
  color: #333;
  line-height: 1.6;
}

h1, h2, h3 {
  color: #111;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

h2 {
  margin-top: 40px;
  font-size: 1.4rem;
  border-bottom: 1px solid #f4f4f4;
  padding-bottom: 6px;
}

p {
  margin-bottom: 16px;
}

ul {
  margin: 10px 0 20px 20px;
}

a {
  color: #5c2727;
  text-decoration: underline;
}

.table-wrapper {
  overflow-x: auto;
  margin: 20px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  font-size: 14px;
}

table th,
table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  vertical-align: top;
}

table th {
  background-color: #1A1919;
  color: #fff;
  font-weight: bold;
}


</style>

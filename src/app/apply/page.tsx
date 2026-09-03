import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, WalletCards } from "lucide-react";
import { ServiceApplicationForm } from "@/components/ServiceApplicationForm";

export default function ApplyPage() {
  return (
    <main className="application-page">
      <section className="section">
        <div className="shell application-shell">
          <Link className="back-link" href="/">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Home
          </Link>

          <div className="application-card">
            <div>
              <p className="eyebrow">Venture Point</p>
              <h1>Service Application</h1>
              <p className="lede">
                Share the services you are interested in and add any custom
                request under Other Option.
              </p>
            </div>

            <ServiceApplicationForm />

            <div className="contact-links">
              <a href="tel:+15712774644">
                <Phone size={18} aria-hidden="true" />
                571-277-4644
              </a>
              <a href="mailto:venturepointmarketing@gmail.com">
                <Mail size={18} aria-hidden="true" />
                venturepointmarketing@gmail.com
              </a>
              <a href="https://venturepointmarketing.com">
                <WalletCards size={18} aria-hidden="true" />
                venturepointmarketing.com
              </a>
              <span>
                <MapPin size={18} aria-hidden="true" />
                Virginia
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

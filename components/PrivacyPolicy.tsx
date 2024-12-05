import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const PrivacyPolicy: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger className="hover:underline decoration-dotted cursor-pointer">
        Privacy & Terms
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <section>
            <p>
              This privacy policy has been compiled to better serve those who
              are concerned with how their ‘Personally identifiable information’
              (PII) is being used online. PII, as used in US privacy law and
              information security, is information that can be used on its own
              or with other information to identify, contact, or locate a single
              person, or to identify an individual in context. Please read our
              privacy policy carefully to get a clear understanding of how we
              collect, use, protect or otherwise handle your Personally
              Identifiable Information in accordance with our website.
            </p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">1. Data We Collect</h3>
            <p>
              When ordering or registering on our site, as appropriate, you may
              be asked to enter your name, email address or other details to
              help you with your experience.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">2. When We Collect Data</h3>
            <p>
              We collect information from you when you register on our site,
              fill out a form or enter information on our site.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">3. How We Use Data</h3>
            <p>
              We may use the information we collect from you when you register,
              make a purchase, sign up for our newsletter, respond to a survey
              or marketing communication, surf the website, or use certain other
              site features in the following ways:
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>
                To personalize user’s experience and to allow us to deliver the
                type of content and product offerings in which you are most
                interested.
              </li>
              <li>To improve our website in order to better serve you.</li>
              <li>
                To send periodic emails regarding your order or other products
                and services.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="font-semibold mb-2">4. How We Protect Your Data</h3>
            <p>
              The information we collect is low level and we use basic
              protection methods.
            </p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">5. Use of Cookies</h3>
            <p>
              Cookies are small files that a site or its service provider
              transfers to your computer’s hard drive through your Web browser
              (if you allow) that enables the site’s or service provider’s
              systems to recognize your browser and capture and remember certain
              information. For instance, we use cookies to help us remember and
              process the items in your shopping cart. They are also used to
              help us understand your preferences based on previous or current
              site activity, which enables us to provide you with improved
              services. We also use cookies to help us compile aggregate data
              about site traffic and site interaction so that we can offer
              better site experiences and tools in the future.
            </p>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-4 mt-2">
              <li>
                Compile aggregate data about site traffic and site interactions
                in order to offer better site experiences and tools in the
                future. We may also use trusted third party services that track
                this information on our behalf.
              </li>
              <li>
                You can choose to have your computer warn you each time a cookie
                is being sent, or you can choose to turn off all cookies. You do
                this through your browser (like Internet Explorer) settings.
                Each browser is a little different, so look at your browser’s
                Help menu to learn the correct way to modify your cookies.
              </li>
              <li>
                If you disable cookies off, some features will be disabled It
                will turn off some of the features that make your site
                experience more efficient and some of our services will not
                function properly. Any personalised experience, such as creating
                or interacting with content will be disabled.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="font-semibold mb-2">6. Third Party Disclosure</h3>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties
              your personally identifiable information unless we provide you
              with advance notice. This does not include website hosting
              partners and other parties who assist us in operating our website,
              conducting our business, or servicing you, so long as those
              parties agree to keep this information confidential. We may also
              release your information when we believe release is appropriate to
              comply with the law, enforce our site policies, or protect ours or
              others’ rights, property, or safety.
            </p>
            <p>
              However, non-personally identifiable visitor information may be
              provided to other parties for marketing, advertising, or other
              uses.
            </p>
            <p>
              Occasionally, at our discretion, we may include or offer third
              party products or services on our website. These third party sites
              have separate and independent privacy policies. We therefore have
              no responsibility or liability for the content and activities of
              these linked sites. Nonetheless, we seek to protect the integrity
              of our site and welcome any feedback about these sites.
            </p>
          </section>
        </div>
        <DialogHeader>
          <DialogTitle className="mt-4">Terms & Conditions</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <section>
            <h3 className="font-semibold mb-2">1. Terms</h3>
            <p>
              By accessing this web site, you are agreeing to be bound by these
              web site Terms and Conditions of Use, all applicable laws and
              regulations, and agree that you are responsible for compliance
              with any applicable local laws. If you do not agree with any of
              these terms, you are prohibited from using or accessing this site.
              The materials contained in this web site are protected by
              applicable copyright and trade mark law.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">2. Use License</h3>
            <p>
              a. Permission is granted to temporarily download one copy of the
              materials (information or software) on Hablab London Ltd’s web
              site for personal, non-commercial transitory viewing only. This is
              the grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on Hablab London Ltd’s web site;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or “mirror” the
                materials on any other server.
              </li>
            </ul>
            <p>
              b. This license shall automatically terminate if you violate any
              of these restrictions and may be terminated by Hablab London Ltd
              at any time. Upon terminating your viewing of these materials or
              upon the termination of this license, you must destroy any
              downloaded materials in your possession whether in electronic or
              printed format.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">3. Disclaimer</h3>
            <p>
              The materials on Hablab London Ltd’s web site are provided “as
              is”. Hablab London Ltd makes no warranties, expressed or implied,
              and hereby disclaims and negates all other warranties, including
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights. Further, Hablab London Ltd does not warrant or make any
              representations concerning the accuracy, likely results, or
              reliability of the use of the materials on its Internet web site
              or otherwise relating to such materials or on any sites linked to
              this site.
            </p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">4. Limitations</h3>
            <p>
              In no event shall Hablab London Ltd or its suppliers be liable for
              any damages (including, without limitation, damages for loss of
              data or profit, or due to business interruption,) arising out of
              the use or inability to use the materials on Hablab London Ltd’s
              Internet site, even if Hablab London Ltd or a Hablab London Ltd
              authorized representative has been notified orally or in writing
              of the possibility of such damage. Because some jurisdictions do
              not allow limitations on implied warranties, or limitations of
              liability for consequential or incidental damages, these
              limitations may not apply to you.
            </p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">5. Revisions and Errata</h3>
            <p>
              The materials appearing on Hablab London Ltd’s web site could
              include technical, typographical, or photographic errors. Hablab
              London Ltd does not warrant that any of the materials on its web
              site are accurate, complete, or current. Hablab London Ltd may
              make changes to the materials contained on its web site at any
              time without notice. Hablab London Ltd does not, however, make any
              commitment to update the materials.
            </p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">6. Links</h3>
            <p>
              Hablab London Ltd has not reviewed all of the sites linked to its
              Internet web site and is not responsible for the contents of any
              such linked site. The inclusion of any link does not imply
              endorsement by Hablab London Ltd of the site. Use of any such
              linked web site is at the user’s own risk.
            </p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">
              7. Site Terms of Use Modifications
            </h3>
            <p>
              Hablab London Ltd may revise these terms of use for its web site
              at any time without notice. By using this web site you are
              agreeing to be bound by the then current version of these Terms
              and Conditions of Use.
            </p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">8. Governing Law</h3>
            <p>
              Any claim relating to Hablab London Ltd’s web site shall be
              governed by the laws of the United Kingdom without regard to its
              conflict of law provisions.
            </p>
            <p>General Terms and Conditions applicable to Use of a Web Site.</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

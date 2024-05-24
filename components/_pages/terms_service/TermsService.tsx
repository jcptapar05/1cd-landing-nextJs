import Header from "@/components/Banner/Header";
import React from "react";

const TermsService = () => {
  const termsOfUse = [
    "Welcome to 1clickdesign.com, a website and online service owned and operated by 1 Click Design, LLC, LLC, a Nevada limited liability company (“1 Click Design, LLC”, “Company”, “we,” or “us”). This page explains the terms by which you may use our Service.",
    "By accessing or using 1 Click Design, LLC services, website (including all areas of the site), applications and software provided online and made available offline through or in connection with the service, including through a mobile device (collectively, the “Service”), you signify that you have read, understood, and agree to be bound by this Terms of Use Agreement (the “Agreement” or “Terms of Use”).",
    "By using the Service you agree to the Terms of Use, whether or not you are a registered user of our Service.",
    "PLEASE READ THESE TERMS OF USE CAREFULLY. THESE TERMS INCLUDE AN AGREEMENT TO MANDATORY ARBITRATION, WHICH MEANS THAT YOU AGREE TO SUBMIT ANY DISPUTE RELATED TO YOUR USE OF ANY OF THE SITES TO BINDING INDIVIDUAL ARBITRATION RATHER THAN PROCEED IN COURT. THE DISPUTES/ARBITRATION PROVISION ALSO INCLUDES A CLASS ACTION WAIVER, WHICH MEANS THAT YOU AGREE TO PROCEED WITH ANY DISPUTE INDIVIDUALLY AND NOT AS PART OF A CLASS ACTION. THIS AGREEMENT ALSO INCLUDES A JURY WAIVER.",
    "We reserve the right to amend this Agreement at any time and without notice. If we do this, we will post the amended Agreement on this page and indicate at the top of the page the date the Agreement was last revised. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms of Use. If you do not agree to any of these terms or any future Terms of Use, do not use or access (or continue to access) the Service. This Agreement applies to all visitors, users, Members, and others who access the Service (“Users”).",
  ];
  const firstSection = [
    {
      title: "Use of Our Service",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            The Service is a place that offers information about interior
            design, furnishings, lighting and décor, kitchen, bathroom and
            building finishes. The Service enables suppliers, manufacturers, and
            exhibitors (“Exhibitors”), the ability to display their product
            offerings via the Service, to enable virtual tours of their
            showrooms in an immersive interactive experience, and to communicate
            with interior designers and other potential visitors via the Service
            in real time. Registered Users (“Members”) are able to access
            exclusive non-public shopping content, information, and experiences.{" "}
          </p>
          <p className="text-justify">
            By enabling Users to find, view, and learn about our exhibitors’
            offerings, 1 Click Design, LLC’s goal is to generate a community of
            design enthusiasts and vendors enabling a worldwide marketplace of
            décor items online. Exhibitors have the right, in their own
            discretion, to make their particular showroom open to all Members,
            or be restricted to Members which they pre-approve.1 Click Design,
            LLC grants you permission to use the Service as set forth in this
            Agreement, provided that: (i) you will not copy, distribute, or
            disclose any part of the Service in any medium; (ii) you will not
            alter or modify any part of the Service other than as may be
            reasonably necessary to use the Service for its intended purpose;
            and (iii) you will otherwise comply with the terms and conditions of
            this Agreement.
          </p>
        </div>
      ),
    },
    {
      title: "Eligibility",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            Use of the Service is void where prohibited. This Service is
            intended solely for Users who are eighteen (18) years of age or
            older, and any registration, use or access to the Service by anyone
            under 18 is unauthorized, unlicensed, and in violation of this
            Agreement. 1 Click Design, LLC may terminate your account, delete
            any content or information that you have posted on the Service,
            and/or prohibit you from using or accessing the Service (or any
            portion, aspect or feature of the Service) for any reason, at any
            time in its sole discretion, with or without notice, including,
            without limitation, if it believes that you are under 18 years of
            age.
          </p>
        </div>
      ),
    },
    {
      title: "Term and Termination",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            This Agreement shall remain in full force and effect while you use
            the Service.1 Click Design, LLC may permanently or temporarily
            terminate, suspend, or otherwise refuse to permit your access to the
            Service without notice and liability, if, in 1 Click Design, LLC’s
            sole determination, you violate any of terms of this Agreement,
            including the following prohibited actions: (i) attempting to
            interfere with, compromise the system integrity or security or
            decipher any transmissions to or from the servers running the
            Service; (ii) taking any action that imposes, or may impose at our
            sole discretion an unreasonable or disproportionately large load on
            our infrastructure; (iii) uploading invalid data, viruses, worms, or
            other software agents through the Service; (iv) impersonating
            another person or otherwise misrepresenting your affiliation with a
            person or entity, conducting fraud, hiding or attempting to hide
            your identity; (v) interfering with the proper working of the
            Service; or, (vi) bypassing the measures we may use to prevent or
            restrict access to the Service, including, but not limited to,
            registering for the Service with an email address that is not
            rightfully yours.
          </p>
        </div>
      ),
    },
    {
      title: "Membership Accounts",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            If you wish to access certain aspects of our Service, including
            shopping areas restricted to professional interior designers, you
            will need to register with 1 Click Design, LLC and create a “Member”
            account by direct registration on the Service. Your membership
            account gives you access to the services and functionality that we
            may establish and maintain from time to time and in our sole
            discretion. You may use your account settings to control your Member
            Profile.
          </p>
          <p className="text-justify">
            Password and Email: When you sign up to become a Member, you will
            also be asked to choose a permanent password and supply your email
            address. Your email address must be either a corporate email address
            or a personal email address if provided a signup invitation via an
            Exhibitor. We may ask you, in our sole discretion, to verify your
            email account and/or provide appropriate documentation such as proof
            of professional licensure to enable your account. Your Member
            Account is subject to verification of your professional credentials
            prior to being granted by 1 Click Design, LLC. You are entirely
            responsible for maintaining the confidentiality of your password.
            You agree not to use the account, username, or password of another
            Member at any time or to disclose your password to any third party.{" "}
          </p>
          <p className="text-justify">
            You agree to notify 1 Click Design, LLC immediately if you suspect
            any unauthorized use of your account or access to your password. You
            are solely responsible for any and all use of your account, and the
            activity that occurs on your account, and you must keep your account
            password secure. You must notify 1 Click Design, LLC immediately of
            any breach of security or unauthorized use of your account. Although
            1 Click Design, LLC will not be liable for your losses caused by any
            unauthorized use of your account, you shall be liable for the losses
            of 1 Click Design, LLC or others due to such unauthorized use.
          </p>
        </div>
      ),
    },
    {
      title: "Communications and Notifications.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            By providing 1 Click Design, LLC with your email address, you
            consent to our use of the email address to send you Service-related
            notices, including, among other things, notices required by law, in
            lieu of postal mail. We may also use your email address to send you
            other messages, including changes to 1 Click Design, LLC features,
            marketing messages, and special offers. If you do not want to
            receive such email messages, you may opt out by clicking on the
            “unsubscribe” link at the bottom of the email, sending us an email
            at help@1clickdesign.com or by sending mail to the following postal
            address: Customer Support1 Click Design, LLC9440 Santa Monica Blvd,
            Suite 301Beverly Hills, CA 90210. Opting out may prevent you from
            receiving email messages regarding updates, improvements, or special
            offers.
          </p>
        </div>
      ),
    },
    {
      title: "Requirements",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            Member accounts are limited to one account per person. When creating
            your account, you must provide accurate and complete information.
            You may not create or use an account for anyone other than yourself,
            provide an email address other than your own, or create multiple
            Membership Accounts. Additionally, you may not impersonate someone
            else (e.g., adopt the identity of a co-worker).You may never use
            another Member’s account without permission. Although 1 Click
            Design, LLC will not be liable for your losses caused by any
            unauthorized use of your account, you shall be liable for the losses
            of 1 Click Design, LLC or others due to such unauthorized use.
          </p>
        </div>
      ),
    },
  ];
  const DMCASection = [
    {
      title: "DMCA Copyright Policy",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            You may not post, modify, distribute, or reproduce in any way, any
            copyrighted material, trademarks, or other proprietary information
            belonging to others without obtaining the prior written consent of
            the owner of such proprietary rights. It is the policy of 1 Click
            Design, LLC to terminate Membership privileges of any Member who
            repeatedly infringes the copyright rights of others upon receipt of
            prompt notification to 1 Click Design, LLC by the copyright owner or
            the copyright owner’s legal agent. Without limiting the foregoing,
            if you believe that your work has been copied and posted on the 1
            Click Design, LLC Service in a way that constitutes copyright
            infringement, please provide us with the following information: (i)
            an electronic or physical signature of the person authorized to act
            on behalf of the owner of the copyright interest; (ii) a description
            of the copyrighted work that you claim has been infringed; (iii) a
            description of where the material that you claim is infringing is
            located on the 1 Click Design, LLC Service; (iv) your address,
            telephone number, and email address; (v) a written statement by you
            that you have a good faith belief that the disputed use is not
            authorized by the copyright owner, its agent, or the law; (vi) a
            statement by you, made under penalty of perjury, that the above
            information in your notice is accurate and that you are the
            copyright owner or authorized to act on the copyright owner’s
            behalf. Please provide this information to: Copyright Notices –1
            Click Design, LLC
          </p>
          <p className="text-justify">
            UNDER FEDERAL LAW, IF YOU KNOWINGLY MISREPRESENT THAT ONLINE
            MATERIAL IS INFRINGING, YOU MAY BE SUBJECT TO CRIMINAL PROSECUTION
            FOR PERJURY AND CIVIL PENALTIES, INCLUDING MONETARY DAMAGES, COURT
            COSTS,AND ATTORNEYS’ FEES. Please note that this procedure is
            exclusively for notifying 1 Click Design, LLC and its affiliates
            that your copyrighted material has been infringed. The preceding
            requirements are intended to comply with 1 Click Design, LLC’s
            rights and obligations under the Digital Millennium Copyright Act
            (“DMCA”), including 17 U.S.C. §512(c), but do not constitute legal
            advice. It may be advisable to contact an attorney regarding your
            rights and obligations under the DMCA and other applicable laws. In
            accordance with the DMCA and other applicable law, 1 Click Design,
            LLC has adopted a policy of terminating, in appropriate
            circumstances and at 1 Click Design, LLC’s sole discretion, members
            who are deemed to be repeat infringers. 1 Click Design, LLC may
            also, at its sole discretion, limit access to the Service and/or
            terminate the accounts of any users who infringe any intellectual
            property rights of others, whether or not there is any repeat
            infringement. Counter-Notice. If you believe that your User Content
            that was removed (or to which access was disabled) is not
            infringing, or that you have the authorization from the copyright
            owner, the copyright owner’s agent, or pursuant to the law, to post
            and use the material in your User Content, you may send a
            counter-notice to 1 Click Design, LLC’s copyright agent containing
            the following information: (i) your physical or electronic
            signature; (ii) identification of the User Content that has been
            removed or to which access has been disabled and the location at
            which the User Content appeared before it was removed or disabled;
            (iii) a statement that you have a good faith belief that the User
            Content was removed or disabled as a result of mistake or a
            misidentification of the User Content; and (iv) your name, address,
            telephone number, and email address, a statement that you consent to
            the jurisdiction of the federal court in Los Angeles, California,
            and a statement that you will accept service of process from the
            person who provided notice of the alleged infringement. If a
            counter-notice is received by 1 Click Design, LLC’s copyright agent,
            1 Click Design, LLC may send a copy of the counter-notice to the
            original complaining party informing that person that it may replace
            the removed User Content or cease disabling it in ten (10) business
            days. Unless the copyright owner files an action seeking a court
            order against the User Content provider, Member, or User, the
            removed User Content may be replaced, or access to it restored, in
            10 to 14 business days or more after receipt of the counter-notice,
            in 1 Click Design, LLC’s sole discretion
          </p>
        </div>
      ),
    },
    {
      title: "Mobile Use",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            By providing us with your mobile phone number, you agree to receive
            such SMS-based communications to the mobile number associated with
            your registered mobile device. To opt-out of receiving these
            SMS-based communications, follow the instructions in the body of the
            SMS message. In the event you elect to opt-out of such SMS-based
            communications, you may receive an additional message from the
            Service confirming your election.1 Click Design, LLC does not
            warrant that the text messaging service will be uninterrupted or
            error free. Though you may access the Service via a mobile device, 1
            Click Design, LLC shall not be liable for any delay in performing or
            failure to perform any obligation hereunder by circumstances beyond
            our reasonable control including (without limitation) any technical
            problems beyond the control of 1 Click Design, LLC such as (for
            example) defects, congestion or failures of capacity or otherwise in
            the public data or telephone or mobile carrier network or caused by
            atmospheric interference, your mobile device being turned off for an
            extended period of time so that messages are not retained, or your
            being unable to obtain mobile network coverage.
          </p>
        </div>
      ),
    },
    {
      title: "Privacy",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            We care about the privacy of our Users. Click here to view our
            Privacy Policy. By using the Service, you are consenting to have
            your personal data transferred to and processed in the United
            States.
          </p>
        </div>
      ),
    },
    {
      title: "Security",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            1 Click Design, LLC has implemented commercially reasonable
            technical and organizational measures designed to secure your
            personal information and User Content from accidental loss and from
            unauthorized access, use, alteration or disclosure. However, we
            cannot guarantee that unauthorized third parties will never be able
            to defeat those measures or use your personal information and User
            Content for improper purposes. You acknowledge that you provide your
            personal information at your own risk.
          </p>
        </div>
      ),
    },
    {
      title: "Third-Party Websites, Advertisers or Services",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            Your dealings with or participation in promotions of advertisers to
            which you opt-in and/or find on the Service, including payment and
            delivery of goods, and any other terms (such as warranties) are
            solely between you and such advertisers. You agree that1 Click
            Design, LLC shall not be responsible for any loss or damage of any
            sort relating to your dealings with such advertisers.
          </p>
        </div>
      ),
    },
    {
      title: "Indemnity",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            You agree to defend, indemnify and hold harmless 1 Click Design, LLC
            and its subsidiaries, agents, and other affiliated companies, and
            the employees, contractors, agents, officers and directors of each,
            from and against any and all claims, damages, obligations, losses,
            liabilities, costs or debt, and expenses (including but not limited
            to attorney’s fees) arising from: (i) your use of and access to the
            Service, including any data transmitted or received by you; (ii) any
            injury, property damage, illness, disability, medical costs and
            expenses. death, loss of services or otherwise arising out of,
            relating to, or in connection with your engaging in any activity
            offered via the Service; (iii) your violation of any term of this
            Agreement, including without limitation, your breach of any of the
            representations and warranties above; (iv) your violation of any
            third-party right, including without limitation any right of
            privacy, publicity rights or Intellectual Property Rights; (v) your
            violation of any law, rule or regulation of the United States or any
            other country; (vi) any claim or damages that arise as a result of
            your User Content or any information that is submitted by you or via
            your account; (vii) any claim or penalty from a taxing authority
            related to your activities on the Service; (viii) any other party’s
            access and use of the Service with your unique username, password or
            other appropriate security code; or (ix) any claim arising out of
            any transaction you enter into with an Exhibitor.
          </p>
        </div>
      ),
    },
    {
      title: "No Warranty",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            THE SERVICE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS.USE
            OF THE SERVICE IS AT YOUR OWN RISK.THE SERVICE IS PROVIDED WITHOUT
            WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT
            NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, OR NON-INFRINGEMENT.WITHOUT LIMITING THE
            FOREGOING, 1 CLICK DESIGN, LLC, ITS SUBSIDIARIES, AND ITS LICENSORS
            DO NOT WARRANT THAT THE CONTENT IS ACCURATE, RELIABLE OR CORRECT;
            THAT THE SERVICE WILL MEET YOUR REQUIREMENTS; THAT THE SERVICE WILL
            BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, UNINTERRUPTED OR
            SECURE; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE
            SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.ANY CONTENT
            DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS
            DOWNLOADED AT YOUR OWN RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR
            ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM
            SUCH DOWNLOAD.1 CLICK DESIGN, LLCDOES NOT WARRANT, ENDORSE,
            GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE
            ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH 1 CLICK DESIGN,
            LLCSERVICE AND 1 CLICK DESIGN, LLCWILL NOT BE A PARTY TO OR IN ANY
            WAY MONITOR ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF
            PRODUCTS OR SERVICES.
          </p>
        </div>
      ),
    },
    {
      title: "Limitation of Liability",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
            1 CLICK DESIGN, LLC, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES,
            AGENTS, OR ITS LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT,
            PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES,
            INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL,
            USE, DATA OR OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE USE OF,
            OR INABILITY TO USE, THIS SERVICE. 1 CLICK DESIGN, LLC IS NOT
            RESPONSIBLE FOR THE CONDUCT, WHETHER ONLINE OR OFFLINE, OF ANY
            MEMBER, EXHIBITOR OR OTHER USER OF THE SERVICE.UNDER NO
            CIRCUMSTANCES WILL 1 CLICK DESIGN, LLCBE BE RESPONSIBLE FOR ANY
            DAMAGE, LOSS OR INJURY RESULTING FROM HACKING, TAMPERING OR OTHER
            UNAUTHORIZED ACCESS OR USE OF THE SERVICE OR YOUR ACCOUNT OR THE
            INFORMATION CONTAINED THEREIN.TO THE MAXIMUM EXTENT PERMITTED BY
            APPLICABLE LAW, 1 CLICK DESIGN, LLCASSUMES NO LIABILITY OR
            RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF
            CONTENT; (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
            WHATSOEVER, INCLUDING DEATH, RESULTING FROM YOUR ACCESS TO AND USE
            OF OUR SERVICE, INCLUDING VIEWING, PLAYING OR DOWNLOADING ANY
            MATERIALS ON OR FROM THE SERVICE, OR OTHERWISE IN CONNECTION WITH
            THE SERVICE; (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
            SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN; (IV)
            ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
            SERVICE; (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY
            BE TRANSMITTED TO OR THROUGH OUR SERVICE BY ANY THIRD PARTY; (VI)
            ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE
            INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED,
            TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE SERVICE; AND/OR
            (VII) USER CONTENT OR THE DEFAMATORY,OFFENSIVE, OR ILLEGAL CONDUCT
            OF ANY THIRD PARTY.IN NO EVENT SHALL 1 CLICK DESIGN, LLC, ITS
            AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE
            LIABLE TO YOU FOR ANY CLAIMS, PROCEEDINGS, LIABILITIES, OBLIGATIONS,
            DAMAGES, LOSSES OR COSTS IN AN AMOUNT EXCEEDING THE AMOUNT YOU PAID
            TO 1 CLICK DESIGN, LLC HEREUNDER.THIS LIMITATION OF LIABILITY
            SECTION APPLIES WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT,
            TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF 1
            CLICK DESIGN, LLCHAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGE.THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE
            FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION.
          </p>
        </div>
      ),
    },
  ];
  const usagePermissions = [
    {
      title: "Personal Use.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            The Service is for the personal use of Members only.
          </p>
        </div>
      ),
    },
    {
      title: "Non-Commercial Use.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            The Service may not be used in connection with any commercial
            endeavors except those that are specifically endorsed or expressly
            approved in writing by 1 Click Design, LLC.
          </p>
        </div>
      ),
    },
    {
      title: "Restrictions.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            You agree not to use or launch any automated system, including
            without limitation, “robots,” “spiders,” “offline readers,” etc.,
            that accesses the Service in a manner that sends more request
            messages to the 1 Click Design, LLC servers than a human can
            reasonably produce in the same period of time by using a
            conventional on-line web browser. Illegal and/or unauthorized use of
            the 1 Click Design, LLC Service, including collecting and/or
            harvesting personally identifiable information, including usernames
            and/or email addresses of Members, by electronic or other means for
            the purpose of sending spam, unsolicited email or unauthorized
            framing of or linking to the website is prohibited. You agree not to
            use any portion of the Service as a destination linked from any
            unsolicited bulk messages or unsolicited commercial messages.
            Appropriate legal action will be taken for any illegal or
            unauthorized use of the 1 Click Design, LLC Service.
          </p>
        </div>
      ),
    },
  ];
  const billingSection = [
    {
      title: "Billing and Payments",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            General. You acknowledge that 1 Click Design, LLC may charge a fee
            for the use of any aspect of the Service, provided that 1 Click
            Design, LLC notifies you of any such fee before you incur it.
            Subject to the foregoing, you agree to pay any fees incurred by you.
            Member agrees to pay for all products ordered through the Website
            using the payment method indicated and provides 1 Click Design, LLC
            and its third party payment processors express authorization to
            charge said fees to the Member’s payment provider at the time of
            purchase or renewal. Fees owed depend on the specific type and
            quantity of 1 Click Design, LLC products, services, information, or
            deliverables (collectively “Deliverables”) ordered. Payment of fees
            shall not be contingent on any events other than the delivery of the
            ordered Deliverables. Any attorney fees, court costs, or other costs
            incurred in the collection of delinquent undisputed amounts shall be
            the responsibility of and paid for by Member. If payment is not
            current, 1 Click Design, LLC may immediately cease to provide any
            and all Deliverables to the Member.
          </p>
          <p className="text-justify">
            It is the Member’s responsibility to promptly provide 1 Click
            Design, LLC with any contact information changes or updates
            (including phone number, email address, physical address, etc.).
            Account updates should be made online via the “My Account” section,
            once a member has logged into the Service.1 Click Design, LLC does
            not validate all credit card information required by the Member’s
            payment provider to secure payment. Orders may be charged,
            fulfilled, and processed by an authorized third-party partner of 1
            Click Design, LLC, in which case any refunds, charge-backs, returns,
            or product substitutions will be subject to the discretion and
            policies of such third-party provider. 1 Click Design, LLC does not
            store or retain your credit card information; such payment
            fulfillment functions are performed by our third-party service
            provider PayPal Inc., and your submission of your information to
            such provider is subject to the online policies of the applicable
            provider which processed your order. All sales are final,
            non-cancelable, and non-refundable except as expressly set forth in
            this Agreement or as otherwise determined by us in our sole
            discretion.
          </p>
          <p className="text-justify">
            Prices. All pricing is in United States dollars. Prices are current
            at the time of publication and are subject to change without notice.
            Taxes. Member will be responsible for any applicable sales or use
            tax, duties, or other governmental taxes or fees payable in
            connection with the Member’s sale or purchase. If you do not pay
            such sales or other tax or fee on a transaction, you will be
            responsible for such taxes or fees in the event that they are later
            determined to be payable on such sale, and 1 Click Design, LLC
            reserves the right to collect such taxes or other fees from you at
            any time
          </p>
        </div>
      ),
    },
    {
      title: "License Grant",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            Subject to the terms and conditions of this Agreement, you are
            hereby granted a non-exclusive, limited, personal license to use the
            Service.1 Click Design, LLC reserves all rights not expressly
            granted herein in the Service and the Content (as defined below).1
            Click Design, LLC may terminate this license at any time for any
            reason or no reason.
          </p>
        </div>
      ),
    },
    {
      title: "Proprietary Rights",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">Intellectual Property Rights.</p>
          <p className="text-justify">
            For the purposes of this Agreement, “Intellectual Property Rights”
            means all patent rights, copyright rights, mask work rights, moral
            rights, rights of publicity, trademark, trade dress and service mark
            rights, goodwill, trade secret rights and other intellectual
            property rights as may now exist or hereafter come into existence,
            and all applications therefore and registrations, renewals and
            extensions thereof, under the laws of any state, country, territory
            or other jurisdiction.
          </p>
        </div>
      ),
    },
  ];
  const userContent = [
    {
      title: "User Content.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            Some areas of the Service may allow Users to post feedback,
            comments, questions, data, text, images, photos, video, sounds,
            musical works, works of authorship, materials and other information
            (“User Content”).You are solely responsible for your User Content
            that you upload, publish, display, link to, or otherwise make
            available (hereinafter, “post”) on the Service, and you agree that
            we are only acting as a passive conduit for your online distribution
            and publication of your User Content.1 Click Design, LLC will not
            review, share, distribute, or reference any such User Content except
            as provided herein or in our Privacy Policy or as may be required by
            law. All such User Content is owned by the User who posted it to the
            Service.1 Click Design, LLC does not have, nor does it claim, any
            ownership rights in any User Content. You agree not to post User
            Content that: (i) may create a risk of harm, loss, physical or
            mental injury, emotional distress, death, disability, disfigurement,
            or physical or mental illness to you, to any other person, or to any
            animal; (ii) may create a risk of any other loss or damage to any
            person or property; (iii) may constitute or contribute to a crime or
            tort; (iv) contains any information or content that is unlawful,
            harmful, abusive, racially or ethnically offensive, defamatory,
            infringing, invasive of personal privacy or publicity rights,
            harassing, humiliating to other people (publicly or otherwise),
            libelous, threatening, or otherwise objectionable; (v) contains any
            information or content that is illegal; (vi) contains any
            information or content that you do not have a right to make
            available under any law or under contractual or fiduciary
            relationships, or (vii) contains any information or content that you
            know is not correct and current. You agree that any User Content
            that you post does not and will not violate third-party rights of
            any kind, including without limitation any Intellectual Property
            Rights (as defined above), rights of publicity, and privacy. You
            understand that publishing your User Content on the Service is not a
            substitute for registering it with the U.S. Copyright Office, the
            Writer’s Guild of America, or any other rights organization.
          </p>
        </div>
      ),
    },
    {
      title: "Responsibility for User Content.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            1 Click Design, LLC takes no responsibility and assumes no liability
            for any User Content that you or any other Users or third parties
            post or send over the Service. You understand and agree that any
            loss or damage of any kind that occurs as a result of the use of any
            User Content that you send, upload, download, stream, post,
            transmit, display, or otherwise make available or access through
            your use of the Service, is solely your responsibility. In the event
            that you elect to download User Content, 1 Click Design, LLC
            recommends that you only download or access files from a trusted
            source and implement security measures to scan downloaded files for
            contaminants.1 Click Design, LLC disclaims any responsibility or
            liability relating to your access to or downloading of User
            Content.1 Click Design, LLC is not responsible for any public
            display or misuse of your User Content. You understand and
            acknowledge that you may be exposed to User Content that is
            inaccurate, offensive, indecent, or objectionable, and you agree
            that 1 Click Design, LLC shall not be liable for any damages you
            allege to incur as a result of such User Content.
          </p>
        </div>
      ),
    },
    {
      title: "User Content License.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            By submitting User Content to the Service, you hereby grant 1 Click
            Design, LLC a worldwide, non-exclusive, royalty-free, sublicensable
            and transferable license to use, reproduce, distribute, prepare
            derivative works of, display and perform the User Content in
            connection with the Service and 1 Click Design, LLC’s (and its
            successors’ and affiliates’) business, including without limitation
            for promoting and redistributing part or all of the Service (and
            derivative works thereof) in any media formats and through any media
            channels. You also hereby grant each user of the Service a
            non-exclusive license to access your User Content through the
            Service, and to use, reproduce, distribute, display and perform such
            User Content as permitted through the functionality of the Service
            and under these Terms of Use. The above licenses granted by you in
            User Content you submit to the Service terminate within a
            commercially reasonable time after you remove or delete your videos
            from the Service. You understand and agree, however, that 1 Click
            Design, LLC may retain, but not display, distribute or perform,
            server copies of your videos that have been removed or deleted. The
            above licenses granted by you in user comments you submit are
            perpetual and irrevocable.
          </p>
        </div>
      ),
    },
    {
      title: "Additional Representations and Warranties.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            You shall be solely responsible for your own User Content and the
            consequences of posting or publishing it. In connection with User
            Content, you affirm, represent and warrant, in addition to the other
            representations and warranties in this Agreement, the following: (i)
            You are at least 18 years of age, or if you are under 18 years of
            age you are either an emancipated minor, or possess legal parental
            or guardian consent, and are fully able and competent to enter into
            the terms, conditions, obligations, affirmations, representations,
            and warranties set forth in this Agreement, and to abide by and
            comply with this Agreement; and (ii) Your User Content and 1 Click
            Design, LLC’s use thereof as contemplated by this Agreement and the
            Service will not infringe any rights of any third party, including
            but not limited to any Intellectual Property Rights, privacy rights
            and rights of publicity.
          </p>
        </div>
      ),
    },
  ];
  const informationalPurpose = [
    {
      title: "No Reliance.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            The Service, and the Content therein, is for informational purposes
            only. All Content is subject to modification, change and/or being
            withdrawn at any time in the sole discretion of 1 Click Design, LLC
            and its affiliates. Reliance on any information provided by 1 Click
            Design, LLC, 1 Click Design, LLC employees, others appearing on the
            Service at the invitation of 1 Click Design, LLC, or other visitors
            to the Service is solely at your own risk.
          </p>
        </div>
      ),
    },
    {
      title: "Décor Descriptions.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            All descriptions of furniture products, art, and decorative
            products, lighting, kitchen finishes, bathroom finishes, and the
            like within a particular design showroom on the Service are the
            responsibility of each Exhibitor.
          </p>
        </div>
      ),
    },
    {
      title: "Transactions between Users and Exhibitors.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            Any transactions between Users and Exhibitors are the sole
            responsibilities of those parties. The Service is merely a passive
            conduit to facilitate interactions but does not participate in such
            transactions.
          </p>
        </div>
      ),
    },
    {
      title: "Exhibitor Content.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            The views, thoughts, and opinions expressed by Exhibitors on the
            Service belong solely to the author and are not those of 1 Click
            Design, LLC, its officers, employees, or affiliates. Any assumptions
            in any analysis or recommendations made in such content are not
            reflective of any other person or entity other than the exhibitor,
            who may change his/her thoughts, views and opinions at any time, and
            should not be held to such views in perpetuity.
          </p>
        </div>
      ),
    },
  ];
  const disputes = [
    {
      title: "Informal Resolution.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            {" "}
            If a dispute arises between You and 1 Click Design, LLC, you agree
            to first provide 1 Click Design, LLC with notice of your complaint
            via email to help@1clickdesign.com so that the parties may attempt
            to resolve the dispute informally within sixty (60) days from the
            date your complaint is received.
          </p>
        </div>
      ),
    },
    {
      title: "Applicable Law and Venue.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            Except as otherwise provided herein, You and 1 Click Design, LLC
            each agree that these Terms of Use and the relationship between the
            parties shall be governed by, construed, and enforced in accordance
            with the laws of the State of California without regard to its
            conflict of law provisions. Except as provided below, You and 1
            Click Design, LLC agree to submit to the exclusive jurisdiction of
            the state and federal courts located in Los Angeles County,
            California, including for any action seeking to compel arbitration
            or vacate an arbitral award, and consent to the personal
            jurisdiction of such courts. The parties agree to waive any and all
            objections to the exercise of jurisdiction over the parties by such
            courts and to venue in such courts.
          </p>
        </div>
      ),
    },
  ];
  const arbitrationAgreement = [
    {
      title: "Arbitration Agreement",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            (1) Arbitration. With the exception of class actions, small claims
            court filings, or actions for preliminary injunctive relief (as
            further discussed below), any other dispute of any kind between you
            and 1 Click Design, LLC arising under this Agreement or in
            connection with your use of the Service (“Dispute(s)”), if
            unresolved through the informal process outlined above, will be
            resolved by binding arbitration in Los Angeles County, California.
            If you are an individual consumer using the Service primarily for
            personal reasons (“Individual Consumer”), as opposed to an
            individual accessing the Service for business purposes, and you are
            located within the United States, you may alternatively select your
            state of residence as the place of arbitration, but all other
            actions remain subject to the venue and choice of law provisions in
            Section 21.B.The arbitrator presiding over a Dispute will be a
            retired judge or justice of any state or federal court with
            substantial experience in the subject matter relevant to the matter
            in dispute and will follow California law, exclusive of conflict or
            choice of law rules, in adjudicating the dispute.BY AGREEING TO
            ARBITRATE, YOU WAIVE ANY RIGHT YOU HAVE TO A COURT OR JURY TRIAL.
            The parties acknowledge that this Agreement evidences a transaction
            involving interstate commerce. Notwithstanding the provision in the
            preceding paragraph with respect to applicable substantive law, any
            arbitration conducted pursuant to the terms of this Agreement will
            be governed by the Federal Arbitration Act. The parties agree that
            the arbitrator presiding over a Dispute will be instructed, whenever
            practicable, to resolve threshold legal issues by way of motions
            filed by the parties. The parties also agree that they will follow
            JAMS’ streamlined arbitration rules and procedures then in effect in
            arbitrating any Dispute, except to the extent that the JAMS rules
            are inconsistent with this Section 21.Cincluding the class action
            waiver described below. The JAMS rules are available at
            www.jamsadr.com. The arbitrator, and not any federal, state, or
            local court or agency, will have exclusive authority to resolve all
            Disputes arising out of or relating to the interpretation,
            applicability, enforceability, or formation of these Terms of Use,
            including, but not limited to, any claim that all or any part of
            these Terms of Use is void or voidable, or whether a claim is
            subject to arbitration. The arbitrator will be empowered to grant
            whatever relief would be available in a court under law or in
            equity, other than class relief. The arbitrator’s award will be
            written, and binding, on the parties and may be entered as a
            judgment in any court of competent jurisdiction. If you are an
            Individual Consumer, 1 Click Design, LLC will pay all arbitration
            administrative fees and fees for the arbitrator’s services, other
            than the $250 filing fee required for you to initiate a claim. If
            you are an Individual Consumer and the claim you wish to assert
            against us is for less than $10,000 then, at your election, (i) the
            arbitration may proceed in-person, by telephone, or by written
            briefs or (ii) you may in lieu of arbitration bring your claim in
            small claims court. If either party files a claim in state or
            federal court that is required by these Terms of Use to have been
            brought to arbitration, then the other party will be entitled to
            such party’s reasonable attorneys’ fees incurred in successfully
            compelling arbitration.
          </p>
          <p className="text-justify">
            Both parties reserve the right to seek a preliminary injunction or
            temporary restraining order from a federal or state court located in
            Los Angeles County, Los Angeles California. However, after such
            request for relief has been adjudicated by such court, the remainder
            of the Dispute will be resolved by binding arbitration as set forth
            herein.
          </p>
          <p className="text-justify">
            (2)Class Action Waiver. YOU AND 1 CLICK DESIGN, LLCAGREE THAT
            DISPUTES WILL BE RESOLVED ON AN INDIVIDUAL BASIS AND THAT ANY CLAIMS
            BROUGHT UNDER THESE TERMS OF USE OR IN CONNECTION WITH THE SERVICE
            MUST BE BROUGHT IN THE PARTIES’ INDIVIDUAL CAPACITIES, AND NOT AS A
            PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE, OR
            REPRESENTATIVE PROCEEDING. The parties further agree that they will
            not participate in any class action (existing or future) brought by
            any third party arising under this Agreement or in connection with
            the Service. If any court or arbitrator determines that the class
            action waiver set forth in this paragraph is void or unenforceable
            for any reason or that an arbitration hereunder can proceed on a
            class-wide basis, then such class action is not subject to
            arbitration and must be litigated in state or federal court in Los
            Angeles County
          </p>
          <p className="text-justify">
            (3) Opt-Out. IF YOU ARE A NEW USER OF THE SERVICE, YOU CAN CHOOSE TO
            REJECT THE AGREEMENT TO ARBITRATE PROVISION (“OPT-OUT”) BY EMAILING
            US AN OPT-OUT NOTICE TO HELP@1CLICKDESIGN.COM(“OPT-OUT NOTICE”) OR
            VIA U.S. MAIL TO: 1 Click Design, LLC, Attn: Arbitration Opt-Out,
            THE OPT-OUT NOTICE MUST BE RECEIVED NO LATER THAN THIRTY (30) DAYS
            AFTER THE DATE YOU ACCEPT THESE TERMS FOR THE FIRST TIME.IF YOU ARE
            NOT A NEW USER OF THE SERVICE,YOU HAVE UNTIL THIRTY (30) DAYS AFTER
            THE POSTING OF THE NEW TERMS TO SUBMIT AN ARBITRATION OPT-OUT
            NOTICE. In order to opt-out, you must email your name, address
            (including street address, city, state, and zip code), and email
            address(es) associated with your User account(s) to which the
            opt-out applies, and the date you started using the Service to:
            help@1clickdesign.com .This procedure is the only way you can
            opt-out of the agreement to arbitrate. If you opt out of the
            agreement to arbitrate, all other parts of these Terms of Use and
            its Disputes Section will continue to apply to you. Opting out of
            this agreement to arbitrate has no effect on any previous, other, or
            future arbitration agreements that you may have with us.
          </p>
        </div>
      ),
    },
    {
      title: "Availability and Use Outside of the United States",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            The Service is controlled, offered and operated from facilities in
            the United States.1 Click Design, LLC makes no representations that
            the Service is appropriate or available for use in other locations.
            Those who access or use the Service from other jurisdictions do so
            at their own volition and are entirely responsible for compliance
            with local law, including but not limited to export and import
            regulations. Unless otherwise explicitly stated, all materials found
            on the Service are solely directed to individuals located in the
            United States. Notwithstanding the foregoing, 1 Click Design, LLC
            retains all rights, including all Intellectual Property Rights, to
            the Service and the Content therein, throughout the world.
          </p>
        </div>
      ),
    },
    {
      title: "Notice to California Users",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            Under California Civil Code Section 1789.3, California website users
            are entitled to the following specific consumer rights notice: The
            Complaint Assistance Unit of the Division of Consumer Services of
            the California Department of Consumer Affairs may be contacted in
            writing at 1625 N. Market Blvd., Suite S-202, Sacramento, California
            95834, or by telephone at (800) 952-5210.
          </p>
        </div>
      ),
    },
  ];
  const general = [
    {
      title: "Entire Agreement.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            This Agreement, together with any other legal notices and agreements
            published by 1 Click Design, LLC via the Service, shall constitute
            the entire agreement between you and 1 Click Design, LLC concerning
            the Service.
          </p>
        </div>
      ),
    },
    {
      title: "No Waiver.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            1 Click Design, LLC’s failure to assert any right or provision under
            this Agreement shall not constitute a waiver of such right or
            provision, and no waiver of any term of this Agreement shall be
            deemed a further or continuing waiver of such term or any other
            term.
          </p>
        </div>
      ),
    },
    {
      title: "Headings.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            The section titles in this Agreement are for convenience only and
            have no legal or contractual effect.
          </p>
        </div>
      ),
    },
    {
      title: "Assignment.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            This Agreement, and any rights and licenses granted hereunder, may
            not be transferred or assigned by you, but may be assigned by 1
            Click Design, LLC without restriction.
          </p>
        </div>
      ),
    },
    {
      title: "Severability.",
      content: (
        <div className="flex flex-col gap-7">
          <p className="text-justify">
            If any provision of this Agreement is unlawful, void or
            unenforceable by a court of competent jurisdiction, that provision
            is deemed severable from this Agreement and does not affect the
            validity and enforceability of any remaining provisions.
          </p>
          <div>
            <p className="text-justify">
              If you have any questions regarding this Agreement, please contact
              us at :
            </p>
            <p>help@1clickdesign.com</p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Header
        title={"Terms of Service"}
        description={"last revised:  Feb 22, 2021"}
        bgImg={"/terms and privacy/bg.png"}
      ></Header>
      <div className="px-8 md:px-72 pt-10 md:pt-20">
        <h1 className=" text-[36px] font-semibold">
          1 Click Design, LLC Terms of Use
        </h1>
        <div className="flex flex-col gap-7 py-8">
          {termsOfUse.map((paragraph, index) => (
            <p key={index} className="text-justify">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-7 ">
          <ul>
            {firstSection.map((section, index) => (
              <li key={index}>
                <h2 className="text-[24px] font-semibold">{section.title}</h2>
                <div className="flex flex-col gap-7 pb-8 pt-2">
                  {section.content}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="text-[24px] font-semibold">
          Usage Permissions and Restrictions
        </h1>
        <div className="pb-2 pt-3">
          <ul>
            {usagePermissions.map((section, index) => (
              <li key={index}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "5px" }}>&#8226;</span>
                  <h2 className="font-medium italic">{section.title}</h2>
                </div>
                <div className="flex flex-col gap-5 pl-[10px] pb-8 pt-2">
                  {section.content}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-7 ">
          <ul>
            {billingSection.map((section, index) => (
              <li key={index}>
                <h2 className="text-[24px] font-semibold">{section.title}</h2>
                <div className="flex flex-col gap-3 pb-8 pt-2">
                  {section.content}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="text-[24px] font-semibold">
          User Content and User Content Responsibility
        </h1>
        <div className="flex flex-col gap-7 ">
          <ul>
            {userContent.map((section, index) => (
              <li key={index}>
                <h2 className="text-[20px] font-medium">{section.title}</h2>
                <div className="flex flex-col gap-3 pb-8 pt-2">
                  {section.content}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="text-[24px] font-semibold">Informational Purpose</h1>
        <div className="flex flex-col gap-7 ">
          <ul>
            {informationalPurpose.map((section, index) => (
              <li key={index}>
                <h2 className="text-[20px] font-medium">{section.title}</h2>
                <div className="flex flex-col gap-3 pb-8 pt-2">
                  {section.content}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-7 ">
          <ul>
            {DMCASection.map((section, index) => (
              <li key={index}>
                <h2 className="text-[24px] font-semibold">{section.title}</h2>
                <div className="flex flex-col gap-7 pb-8 pt-2">
                  {section.content}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="text-[24px] font-semibold">Disputes</h1>
        <div className="flex flex-col gap-7 ">
          <ul>
            {disputes.map((section, index) => (
              <li key={index}>
                <h2 className="text-[20px] font-medium">{section.title}</h2>
                <div className="flex flex-col gap-3 pb-8 pt-2">
                  {section.content}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-7 ">
          <ul>
            {arbitrationAgreement.map((section, index) => (
              <li key={index}>
                <h2 className="text-[24px] font-semibold">{section.title}</h2>
                <div className="flex flex-col gap-7 pb-8 pt-2">
                  {section.content}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="text-[24px] font-semibold">General</h1>
        <div className="flex flex-col gap-7 ">
          <ul>
            {general.map((section, index) => (
              <li key={index}>
                <h2 className="text-[20px] font-medium">{section.title}</h2>
                <div className="flex flex-col gap-3 pb-8 pt-2">
                  {section.content}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsService;
